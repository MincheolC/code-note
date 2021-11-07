(ns fast-elegant-clojure.use-transducer
  (:require [criterium.core :as cc]))

(defn sliding
  ([^long n]
   (sliding n 1))
  ([^long n ^long step]
   (fn [rf]
     (let [a (java.util.ArrayDeque. n)] ;; Queue here
       (fn
         ([] (rf))
         ([result] (rf result)) ;; don't need leftovers
         ([result input]
          (.add a input)
          (if (= n (.size a))
            (let [v (vec (.toArray a))]
              ;; Remove `step` elements instead of clear
              (dotimes [_ step] (.removeFirst a))
              (rf result v))
            result)))))))

(def baseline-xf
  (comp
    ;(sliding 8 1)
    (partition-all 8)
    (map (juxt identity
               (comp (partial apply -)
                     (juxt last first))))
    (filter (comp (partial > 1000) second))))
