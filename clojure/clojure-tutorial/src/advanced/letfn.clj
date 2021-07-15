(ns advanced.letfn)

(defn letfn' [n]
  (letfn [(twice [x] (* x 2))
          (plus5 [x] (+ x 5))]
    (-> n twice plus5)))
