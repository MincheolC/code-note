(ns util
  (:require [clojure.walk :as walk]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [clojure.string :as s]
            [clojure.data.csv :as csv])
  (:import
   (java.util LinkedHashMap ArrayList)))

(def ^:private env
  (if (.exists (io/as-file "env.edn"))
    (->> (slurp "env.edn")
         edn/read-string)
    {}))

(defn get-env [& ks]
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
