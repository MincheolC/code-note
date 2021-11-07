(ns fast-elegant-clojure.baseline)

(defn smt-8 [times]
  (->> times                                     ; [0 1 2 3 4 5 6 7 ... ]
       (partition 8)                             ; ((0 1 2 3 4 5 6 7) ...)
       (map (juxt identity
                  (comp (partial apply -)
                        (juxt last first))))     ; (((0 1 2 3 4 5 6 7) 7) ... )
       (filter (comp (partial > 1000) second))))
