(ns products.handler
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [clojure.core.protocols :as p]
            [clojure.data.json :as json]
            [cognitect.aws.client.api :as aws]
            [util]))

(defn invoke-lambda! [name' args-map]
  (let [client (aws/client {:api :lambda
                            :region :ap-northeast-2})
        operation {:op :InvokeAsync
                   :request {:FunctionName name'
                             :InvokeArgs (json/write-str args-map)}}
        result (aws/invoke client operation)
        failed-status? (fn [v] (or (nil? v)
                                   (< v 200)
                                   (>= v 300)))]
    (when (failed-status? (:Status result))
      (println "[트리거 실패] " name' " | " args-map))))

(defn -handler [_]
  (println *ns*)
  (let [product-ids ["821"]]
    (invoke-lambda! "greenlabs-sinsun-market-dev-product-options" {:product-ids product-ids})
    (invoke-lambda! "greenlabs-sinsun-market-dev-product-option-details" {:product-ids product-ids})))

(comment
  (-handler nil))

