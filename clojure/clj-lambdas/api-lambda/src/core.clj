(ns core
  (:gen-class :methods [^:static [handler [Object] Object]])
  (:require [clojure.core.protocols :as p]
            [clojure.datafy :refer [datafy]]))

(extend-protocol p/Datafiable
  java.util.Map
  (p/datafy [o] (let [entries (.entrySet o)]
                  (reduce (fn [m [^String k v]]
                            (assoc m (keyword k) (p/datafy v)))
                          {} entries)))
  java.util.List
  (p/datafy [o] (vec (map p/datafy o))))

(defn -handler[event]
  (prn event)
  (prn (datafy event))
  (prn "hello world")
  event)
