;; https://bsless.github.io/fast-and-elegant-clojure/
(ns fast-elegant-clojure.core
  (:require [criterium.core :as cc]
            [fast-elegant-clojure.baseline :refer [smt-8]]
            [fast-elegant-clojure.use-transducer :refer [baseline-xf]]
            [fast-elegant-clojure.decomposing :refer [decomposed-xf vector-xf]]
            [fast-elegant-clojure.to-keep :refer [keep-xf]]
            [clojure.string :as str]))

(comment
  (def times-v (->> (iterate #(+ % (rand-int 1000)) 0)
                    (take 1e6)
                    (into [])))

  (count times-v)
  (cc/quick-bench (doall (smt-8 times-v)))
  (cc/quick-bench (doall (sequence baseline-xf times-v)))
  (cc/quick-bench (doall (sequence decomposed-xf times-v)))
  (cc/quick-bench (doall (sequence vector-xf times-v)))
  (cc/quick-bench (doall (sequence keep-xf times-v)))
  )
