(ns from-sqs
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [clojure.data.json :as json]))

(defn -handler [event]
  (prn "from-sqs")
  (prn event))
