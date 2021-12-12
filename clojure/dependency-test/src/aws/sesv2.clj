(ns aws.sesv2
  (:require [cognitect.aws.client.api :as aws]))

(defn send-email! []
  (let [ses (aws/client {:api :sesv2
                         :region :ap-northeast-2})
        invoke-map {:op      :SendEmail
                    :request {:Destination      {:ToAddresses ["mc.cha@greenlabs.co.kr"]}
                              :FromEmailAddress "no-reply@test.ccom"
                              :Content          {:Simple {:Subject {:Data "hello"}
                                                          :Body    {:Text {:Data "world"}}}}}}]
    (aws/invoke ses invoke-map)))

(comment
  (send-email!)
  (let [ses (aws/client {:api :sesv2})]
    (aws/doc ses :SendEmail)))
