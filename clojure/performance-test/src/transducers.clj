(ns transducers)

(def xf (comp
          (filter odd?)
          (map inc)))

(transduce xf + (range 5))
(transduce xf + 100 (range 5))


(def iter (eduction xf (range 5)))
(reduce + 0 iter)
(prn (class iter))

(class (into [] xf (range 5)))

(let [(class (sequence xf (range 5)))])
