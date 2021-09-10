(ns advanced.java-interop
  (:require [clojure.walk :as walk]
            [clojure.data.json :as json]))

(comment
  (def res-map {"Records" [{"messageId" "5032c36e-5a8a-4ba3-a96b-056366cda510", "receiptHandle" "AQEB+FlrXKDk2DnIK92M1CvYgc7TVBPuWwQPCGQdKc6Rky8DTGhOTDxpn2ScMihhmkwggdFoKEEt4+tW9DISw5LebNDGoqT94ltZ3R7/Z/eG9iV+YyUmFPIwR9lyXQTBhpT2fI+sVnAv+sk3mi/SFTKNLGDAiaBqjQFvh9mTSKqUTnAPEfiQ9I/hXwrmBCqqoIPwYe6go1UnKMCvKBnaHTjs8cyKH6dXHoTNCdFN+p/EdH9Ap9Hhh2lahN5DTvhI+G9BRr8kr9clq/CNlFfAFjrImxsFy1aL0bob+ojf5UIH6jU=", "body" "{\"date-str\":\"20210710\", \"specie-code\":\"061401\"}", "attributes" {"ApproximateReceiveCount" "1", "SentTimestamp" "1627349863885", "SequenceNumber" "18863345638864111616", "MessageGroupId" "20210710", "SenderId" "140131123595", "MessageDeduplicationId" "20210710", "ApproximateFirstReceiveTimestamp" "1627349863885"}, "messageAttributes" {}, "md5OfBody" "f9498e4f7bf32044d39d5d26735df16a", "eventSource" "aws:sqs", "eventSourceARN" "arn:aws:sqs:ap-northeast-2:140131123595:test.fifo", "awsRegion" "ap-northeast-2"}]})
  (def res (walk/keywordize-keys res-map))
  (-> res :Records first :body json/read-json))

(def specie-type-grain  "1")
(def specie-type-fruits "2")
(def specie-type-fish   "3")
(def specie-types
  {specie-type-grain  ["쌀"]
   specie-type-fruits ["고구마" "감자"]
   specie-type-fish   ["고등어"]})

(def product-type->specie-type
  (->> specie-types
       (map (fn [[specie-type products]]
              (map (fn [product] [product specie-type])
                   products)))
      ;;  flatten
      ;;  (apply hash-map)
       ))

product-type->specie-type