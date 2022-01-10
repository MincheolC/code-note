(ns advanced.special-form)

(defn pre'
  "pre condition"
  [x]
  {:pre [(pos? x)]}
  x)

(defn pre-value'
  "pre condition"
  [x y]
  {:pre [x y]}
  {:x x :y y})

(defn post'
  "post condition"
  [x]
  {:post [(pos? %)]}
  x)

(defn original
  ([x] (original x 1))
  ([x y]
   (+ x y)))

;; defn is just a macro that wraps def
(def ^{:arglists '([x] [x y])}
  derived original)
(= (original 1 2) (derived 1 2))
