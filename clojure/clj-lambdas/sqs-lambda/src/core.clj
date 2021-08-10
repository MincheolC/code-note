(ns core
  (:gen-class
   :methods [^:static [handler [Object] Object]])
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :refer [basic-credentials-provider]]
            [util :refer [simplify ->keyword]]))

#_(def credentials (basic-credentials-provider {:access-key-id (System/getenv "AWS_ACCESS_KEY_MY_ID")
                                              :secret-access-key (System/getenv "AWS_SECRET_MY_KEY")}))

#_(defn get-queue-list-from-sqs
  "AWS SQS에 메시지를 전송한다."
  []
  (let [sqs-client (aws/client {:api                  :sqs
                                :region               :ap-northeast-2
                                :credentials-provider credentials})
        operation {:op      :ListQueues}]
    (aws/invoke sqs-client operation)))

#_(defn receive-message-from-sqs
  "AWS SQS에 메시지를 수신한다."
  [queue-url]
  (let [sqs-client (aws/client {:api                  :sqs
                                :region               :ap-northeast-2
                                :credentials-provider credentials})
        operation {:op      :ReceiveMessage
                   :request {:QueueUrl queue-url}}]
    (aws/invoke sqs-client operation)))

(defn -handler
  "람다에서는 자바의 LinkedHashMap으로 넘어오기 때문에, 모든 **중첩된 자료구조**를 클로저의 map으로 바꿔주는 과정이 필요함"
  [msg]
  (prn (-> msg simplify ->keyword :Records)))

(comment
  (def sqs (aws/client {:api                  :sqs
                        :region               :ap-northeast-2}))
  (aws/ops sqs)
  (aws/doc sqs :ReceiveMessage)

  (def standard-q-url "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test")
  (def fifo-q-url "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test.fifo")
  
  (receive-message-from-sqs standard-q-url)
  (receive-message-from-sqs fifo-q-url)
  (-handler {:Records ""}))
