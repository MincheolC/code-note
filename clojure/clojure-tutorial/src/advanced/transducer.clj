(ns advanced.transducer)

;; Transducer는 부분함수나 커링이 아님
;; comp가 transducer를 순서화할 때는 ->> 와 동일
(filter odd?) ;; returns a transducer that filters odd
(map inc)     ;; returns a mapping transducer for incrementing
(take 5)      ;; returns a transducer that will take the first 5 values

(def xf
  (comp
   (filter odd?)
   (map inc)))

(def xff (fn [coll]
           (->> coll
                (filter odd?)
                (map inc))))

(transduce xf + (range 5))
(into [] xf (range 5))
(sequence xf (range 5))

(into [] xff (range 5))
(sequence xff (range 5))

(def iter (eduction xf (range 5)))
(reduce + 0 iter)
