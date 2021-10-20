(ns alimtalk-soldoutnotice.src.core
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.tools.logging :as log]
            [clojure.tools.logging.impl :refer [slf4j-factory]]))

(binding [log/*logger-factory* (slf4j-factory)]
  (defn -handler [_]
    (log/info "Hello world")
    ;(let [url "https://hooks.slack.com/services/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"]
    ;  (client/post url {:body (json/write-str {:type "mrkdwn"
    ;                                           :text "hello world"})}))
  ))

(comment
  (binding [log/*logger-factory* (slf4j-factory)]
    (prn log/*logger-factory*))
  (prn log/*logger-factory*)
  (slf4j-factory)

  (-handler nil)

  (let [response (-handler nil)]
    (prn response)
    (json/write-str response)))
