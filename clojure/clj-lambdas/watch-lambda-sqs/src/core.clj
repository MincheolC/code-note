(ns core
  (:gen-class
   :methods [^:static [handler [Object] Object]])
  (:require [clojure.data.json :as json]
            [cognitect.aws.client.api :as aws]
            [clojure.walk :as w])
  (:import
   (java.util LinkedHashMap ArrayList)))

(def queue-url "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test")

(defn send-message-to-fifo [client]
  (aws/invoke client {:op :SendMessage
                      :request {:QueueUrl "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test.fifo"
                                :MessageDeduplicationId "20210710"
                                :MessageGroupId "20210710"
                                :MessageBody (json/write-str {:date-str "20210710"
                                                              :specie-code "061401"})}}))
(defn send-message [client]
  (aws/invoke client {:op :SendMessage
                      :request {:QueueUrl "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test"
                                :MessageBody (json/write-str {:date-str "20210710"
                                                              :specie-code "061401"})}}))

(defn build-batch-entries [date-str specie-codes]
  (->> (map #(json/write-str {:date-str date-str
                              :specie-code %}) specie-codes)
       (map-indexed (fn [idx v]
                      {:Id idx
                       :MessageBody v}))))


(defn send-message-batch [client entries]
  (aws/invoke client {:op :SendMessageBatch
                      :request {:QueueUrl queue-url
                                :Entries entries}}))

(defn list-queues [client]
  (aws/invoke client {:op :ListQueues}))

(defn simplify
  "모든 중첩 구조의 맵을 standard hash map으로 바꾸고, 시퀀스를 벡터로 변환시킵니다."
  [m]
  (w/postwalk
   (fn [node]
     (cond
       (instance? LinkedHashMap node) (simplify (into {} node))
       (or (seq? node)
           (instance? ArrayList node)) (simplify (vec node))
       :else node))
   m))

(defn parse [msg]
  (-> (into {} msg)
      w/keywordize-keys))

(defn processing []
  (let [sqs-client (aws/client {:api :sqs
                                :region :ap-northeast-2})]
    (send-message sqs-client)))

(defn -handler
  "람다에서는 자바의 LinkedHashMap으로 넘어오기 때문에, 모든 **중첩된 자료구조**를 클로저의 map으로 바꿔주는 과정이 필요함"
  [msg]
  (prn msg (type msg))
  (if-let [dlq (-> msg parse :dlq)]
    (prn dlq)
    (prn msg))
  ;; (processing)
  )

(comment
  (def sqs (aws/client {:api :sqs
                        :region :ap-northeast-2}))
  (aws/ops sqs)
  (def s3 (aws/client {:api :s3
                       :region :ap-northeast-2}))
  (aws/ops s3)
  (aws/doc s3 :ListObjects)

  (aws/invoke s3 {:op :ListObjects
                  :request {:Bucket "farmmorning-market-price-v2"
                            :Prefix "2022/07"}})

  (def dlq {"dlq" ["020101"
                   "020199"
                   "030101"
                   "030107"
                   "030108"
                   "030110"
                   "030112"
                   "030115"
                   "030116"
                   "030119"
                   "030120"
                   "030198"
                   "030199"
                   "030201"
                   "030202"
                   "030206"
                   "030298"
                   "030299"
                   "030301"
                   "030399"
                   "030401"
                   "030403"
                   "030404"
                   "030498"
                   "030499"
                   "030501"
                   "030503"
                   "030505"]})
  (def dlq-value (get dlq "dlq"))
  (def cloud-watch-msg {"version" "0", "id" "d385be19-519c-dcfb-6fbe-ab043ece9ed1", "detail-type" "Scheduled Event", "source" "aws.events", "account" "140131123595", "time" "2021-07-29T11:42:15Z", "region" "ap-northeast-2", "resources" ["arn:aws:events:ap-northeast-2:140131123595:rule/every-5-mins"], "detail" {}})
  (-handler dlq)
  (-handler cloud-watch-msg)

  (def entries-list (->> (partition-all 10 dlq-value)
                         (map #(build-batch-entries "20210722" %))))

  (doseq [entries entries-list]
    (prn (send-message-batch sqs entries)))

  (build-batch-entries "20210722" dlq-value)
  (send-message-batch sqs (build-batch-entries "20210722" dlq-value)))

