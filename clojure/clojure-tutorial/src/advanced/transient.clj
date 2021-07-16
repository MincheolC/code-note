(ns advanced.transient
  (:require [criterium.core :as c]))

(defn vrange [n]
  (loop [i 0 v []]
    (if (< i n)
      (recur (inc i) (conj v i))
      v)))

(defn vrange2 [n]
  (loop [i 0 v (transient [])]
    (if (< i n)
      (recur (inc i) (conj! v i))
      (persistent! v))))

;; (def v (c/bench (vrange 1000000))) ; 41ms
;; (def v2 (c/bench (vrange2 1000000))) ; 15ms

(def v (time (vrange 100))) ; 41ms
(def v2 (time (vrange2 100))) ; 15ms

(comment
  (c/with-progress-reporting (c/bench (Thread/sleep 1000) :verbose))
  (c/with-progress-reporting (c/bench (vrange 100) :verbose))
  (c/with-progress-reporting (c/bench (vrange2 100) :verbose)))
