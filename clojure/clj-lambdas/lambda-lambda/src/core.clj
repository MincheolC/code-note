(ns core
  (:gen-class
   :methods [^:static [handler [Object] Object]])
  (:require [clojure.data.json :as json]
            [cognitect.aws.client.api :as aws]
            [clojure.walk :as w])
  (:import
   (java.util LinkedHashMap ArrayList)))

(defn send-missing-codes-to-scheduler
  "누락된 품종 리스트 스케줄러에게 전달 (market-price-collector-scheduler)"
  []
  (let [lambda-client (aws/client {:api :lambda
                                   :region :ap-northeast-2})
        operation {:op :InvokeAsync
                   :request {:FunctionName "scheuler-test"
                             :InvokeArgs   (json/write-str {:specie-codes []})}}
        result (aws/invoke lambda-client operation)
        fail-status? (fn [v] (or (nil? v)
                                 (> 200 v)
                                 (>= v 300)))]
    (when (fail-status? (:Status result))
      (throw (ex-info "스케줄러 트리거 실패" result)))))

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

(defn -handler
  "람다에서는 자바의 LinkedHashMap으로 넘어오기 때문에, 모든 **중첩된 자료구조**를 클로저의 map으로 바꿔주는 과정이 필요함"
  [msg]
  (prn msg (type msg))
  (if-let [dlq (-> msg parse :dlq)]
    (prn dlq)
    (prn msg))
  )

(comment
  (send-missing-codes-to-scheduler))

