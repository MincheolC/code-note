(ns advanced.every-some)

(def b [{:a 1}
        {:a 2}
        {:a 3}
        {:b 1}])
(def a [{:a 1}
        {:a 2}
        {:a 3}])
(def res [{:ETag 1}
          {:ETag 2}
          {:ETag 3}])

(defn every-has-a? [coll]
  (every? :a coll))

(every-has-a? a)
(every-has-a? b)
(every? :ETag res)

(seq nil)

(defn n [pred]
  (when pred
    {:a 1}))

(or (:a (n false)) 0)
(or (:a (n true)) 0)