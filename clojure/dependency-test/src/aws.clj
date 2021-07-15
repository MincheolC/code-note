;; https://github.com/cognitect-labs/aws-api
(ns aws
  (:require  [clojure.edn :as edn]
             [clojure.java.io :as io]
             [buddy.core.codecs :as codec]
             [cognitect.aws.client.api :as aws]
             [cognitect.aws.credentials :as credentials]))

(def config (-> "config.edn" io/resource slurp edn/read-string))
(def image (-> "dodge.jpg" io/resource slurp codec/str->bytes codec/bytes->b64))
(def path "dodge")

(defn make-s3-client
  [config]
  (let [credentials (-> (:aws config)
                        (select-keys [:access-key-id :secret-access-key])
                        credentials/basic-credentials-provider)]
    (aws/client {:api                  :s3
                 :region :ap-northeast-2
                 :credentials-provider credentials})))

(defn upload-image-to-s3
  [s3-client bucket image]
  (aws/invoke s3-client {:op      :PutObject
                         :request {:Bucket bucket
                                   :Key    path
                                   :Body   (io/input-stream image)}}))

(defn delete-image-from-s3
  [s3-client bucket path]
  (aws/invoke s3-client {:op      :DeleteObject
                         :request {:Key path
                                   :Bucket bucket}}))

(defn delete-images-from-s3
  [s3-client bucket path]
  (aws/invoke s3-client {:op      :DeleteObjects
                         :request {:Delete {:Objects [{:Key path}]}
                                   :Bucket bucket}}))
(defn upload []
  (let [s3-client (make-s3-client config)
        bucket-name (get-in config [:aws :community-s3])]
    (upload-image-to-s3 s3-client bucket-name image)))

(defn delete []
  (let [s3-client (make-s3-client config)
        bucket-name (get-in config [:aws :community-s3])]
    (delete-image-from-s3 s3-client bucket-name path)))

(defn deletes []
  (let [s3-client (make-s3-client config)
        bucket-name (get-in config [:aws :community-s3])]
    (delete-images-from-s3 s3-client bucket-name path)))

(comment
  ;; examaples
  (def s3 (aws/client {:api :s3}))
  (aws/ops s3)
  (aws/doc s3 :PutObject)
  (aws/doc s3 :DeleteObjects)
  )

(comment
  (upload)
  (delete)
  (deletes)
  )