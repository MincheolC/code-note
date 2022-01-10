(ns basic.merge-with)

(def m1 {:a 1
         :b 2
         :c 3})

(def m2 {:a 1
         :b 5
         :c 6})

(def m3 {:b 5
         :c 6})

(defn conj' [a b]
  (if (coll? a)
    (conj a b)
    (conj [] a b)))

(comment
  (merge-with + m1 m2)
  (merge-with conj' m1 m2 m3))



