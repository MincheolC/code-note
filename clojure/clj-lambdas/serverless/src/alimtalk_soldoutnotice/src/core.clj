(ns alimtalk-soldoutnotice.src.core
  (:gen-class :methods [^:static [handler [Object] Object]]))

(defn -handler [_]
  (prn "Hello world"))