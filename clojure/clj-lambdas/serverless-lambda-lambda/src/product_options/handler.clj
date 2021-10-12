(ns product-options.handler
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [clojure.core.protocols :as p]
            [util]))

(defn -handler [event]
  (println *ns*)
  (println (p/datafy event)))

(comment
  (-handler nil))
