(ns fast-elegant-clojure.decomposing)

(def decomposed-xf
  (comp
    (partition-all 8)
    (map (fn [v] [v (- (last v) (first v))]))
    (filter (fn [[_ t]] (> 1000 t)))))

(def vector-xf
  (comp
    (partition-all 8)
    (map (fn [v] [v (- (peek v) (nth v 0))]))
    (filter (fn [[_ t]] (> 1000 t)))))

