(ns advanced.ref-alter-dosync)

;; ref - alter - dosync
(def state {:a (ref 3)
            :b (ref 10)})

(defn ->state' []
  (let [a (get state :a)
        b (get state :b)]
    (dosync (when (pos? @b)
              (alter b dec)
              (alter a #(+ % 24))))))

(let [n 2]
  (future (dotimes [_ n] (->state')))
  (future (dotimes [_ n] (->state')))
  (future (dotimes [_ n] (->state'))))

@(get state :a)
@(get state :b)

;; ref-set
(def x (ref 1))
(def y (ref 1))

(defn new-value []
  (dosync
   (ref-set y (+ 2 @x))
   (alter x inc)))

(let [n 2]
  (future (dotimes [_ n] (new-value)))
  (future (dotimes [_ n] (new-value))))

@x
@y