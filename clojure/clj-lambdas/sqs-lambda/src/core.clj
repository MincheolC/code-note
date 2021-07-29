(ns core
  (:gen-class
   :methods [^:static [handler [Object] Object]])
  (:require [clojure.data.json :as json]
            [clojure.walk :as walk]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [clojure.string :as s]
            [cognitect.aws.client.api :as aws]
            [clojure.data.csv :as csv])
  (:import
   (java.util LinkedHashMap ArrayList)))

(def ^:private env
  (if (.exists (io/as-file "env.edn"))
    (->> (slurp "env.edn")
         edn/read-string)
    {}))

(defn- get-env [& ks]
  (or
   (get-in env (map keyword ks))
   (System/getenv (s/join "_" (map name ks)))))

(defn ->keyword
  "맵안의 모든 키들을 키워드로 변환시켜줍니다.
   in:  {\"a\" {\"b\" 1 \"c\" 2 \"d\" 3 [0 1] {3.14 \"pi\"}
   out: {:a {:b 1, :c 2, :d 3, [0 1] {3.14 \"pi\"}}}}"
  [input]
  (walk/keywordize-keys input))

(defn simplify
  "모든 중첩 구조의 맵을 standard hash map으로 바꾸고, 시퀀스를 벡터로 변환시킵니다."
  [m]
  (walk/postwalk
   (fn [node]
     (cond
       (instance? LinkedHashMap node) (simplify (into {} node))
       (or (seq? node)
           (instance? ArrayList node)) (simplify (vec node))
       :else node))
   m))

(defn ->csv
  "특정 상품에 대한 시장 가격 시퀀스를 입력받아, CSV 형식 문자열로 변환한다."
  []
  (with-open [writer (java.io.StringWriter.)]
    (csv/write-csv writer [["a" "b"]
                           [1 2]
                           [3 4]])
    (str writer)))

;;; AWS S3 업로드
(defn upload-to-s3
  "AWS S3 의 path 파일을 생성하고 body 내용을 업로드한다."
  []
  (let [s3-client (aws/client {:api                  :s3
                               :region               :ap-northeast-2})
        result (aws/invoke s3-client {:op      :PutObject
                                      :request {:Bucket "charles.s3-test"
                                                :Key    "test"
                                                :Body   (->csv)}})]
    (if (:ETag result)
      result
      (throw (ex-info "S3 업로드 실패" result)))))

(defn get-queue-list-from-sqs
  "AWS SQS에 메시지를 전송한다."
  []
  (let [sqs-client (aws/client {:api                  :sqs
                                :region               :ap-northeast-2})
        operation {:op      :ListQueues}]
    (aws/invoke sqs-client operation)))

(defn -handler
  "람다에서는 자바의 LinkedHashMap으로 넘어오기 때문에, 모든 **중첩된 자료구조**를 클로저의 map으로 바꿔주는 과정이 필요함"
  [msg]
  (let [msg (-> msg simplify ->keyword)
        _ (prn msg)
        receivedCount (-> msg :Records first :attributes :ApproximateReceiveCount Integer/parseInt)
        {:keys [date-str specie-code]} (-> msg :Records first :body json/read-json)]
    (if (< receivedCount 1)
      (throw (AssertionError. "Wrong Input"))
      (do
        (prn date-str specie-code (get-env :ENV))
        (upload-to-s3)))))

(comment
  (get-env :ENV)
  (get-queue-list-from-sqs))