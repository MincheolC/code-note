(ns fast-elegant-clojure.to-keep)

(def keep-xf
  (comp
    (partition-all 8)
    (keep (fn [v]
            (when (> 1000 (- (peek v) (nth v 0)))
              v)))))
