(ns to-sqs
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [cognitect.aws.client.api :as aws]
            [clojure.data.json :as json]))

(defn enqueue-job [job group-id]
  (let [sqs (aws/client {:api                  :sqs
                         :region               :ap-northeast-2})]
    (aws/invoke sqs
               {:op      :SendMessage
                :request {:QueueUrl               (System/getenv "SQS_URL")
                          :MessageBody            (json/write-str job)
                          :MessageGroupId         group-id
                          :MessageDeduplicationId (.toString (java.util.UUID/randomUUID))}})))

(defn -handler [_]
  (prn "to-sqs")
  (enqueue-job {:hello "world"} "1"))


(->> (partition-all 2 [1 2 3 4 5 6 7 8])
     (take 2))
