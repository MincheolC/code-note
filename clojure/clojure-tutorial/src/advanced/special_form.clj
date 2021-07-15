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