(ns advanced.fixture)

(defn fixture1 [f]
  (prn "pre-f1")
  (f)
  (prn "post-f1"))

(defn fixture2 [f]
  (prn "pre-f2")
  (f)
  (prn "post-f2"))

(defn greeting []
  (prn "hello"))