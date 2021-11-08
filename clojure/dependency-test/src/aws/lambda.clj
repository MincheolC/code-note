(ns aws.lambda
  (:require [clojure.data.json :as json]
            [cognitect.aws.client.api :as aws]
            [clojure.java.io :as io]
            [aws.cognitect-config :as config])
  (:import com.amazonaws.auth.AWSCredentials
           com.amazonaws.auth.AWSCredentialsProvider
           com.amazonaws.auth.DefaultAWSCredentialsProviderChain))

(defn invoke-lambda! []
  (let [client (aws/client {:api :lambda
                            :region :ap-northeast-2})
        operation {:op :InvokeAsync
                   :request {:FunctionName "action-test"
                             :InvokeArgs (json/write-str {:a 1})}}
        result (aws/invoke client operation)
        failed-status? (fn [v] (or (nil? v)
                                   (< v 200)
                                   (>= v 300)))]
    (prn result)
    (when (failed-status? (:Status result))
      (println "[트리거 실패]"))))

(comment
  (invoke-lambda!))

(comment
  (def ac (DefaultAWSCredentialsProviderChain.))
  (def cr (.getCredentials ac))
  (.getAWSAccessKeyId cr))

(comment
  (System/getProperties)
  (def f (io/file (System/getProperty "user.home") ".aws" "credentials"))

  (let [profile (get (config/parse f) "default")]
    (config/valid-credentials
      {:aws/access-key-id     (get profile "aws_access_key_id")
       :aws/secret-access-key (get profile "aws_secret_access_key")
       :aws/session-token     (get profile "aws_session_token")}
      "aws profiles file")))
