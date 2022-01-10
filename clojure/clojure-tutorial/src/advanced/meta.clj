(ns advanced.meta)

;; return metadata of obj
(meta #'first)
;; attach metadata
(def ^{:custom {:name "test"}} s [1 2 3])
(meta s)
(def my-meta (with-meta s {:custom "my-meta"}))
(prn (meta my-meta))

;; Returns an object of the same type and value as obj, with
;; (apply f (meta obj) args) as its metadata.
(meta (vary-meta my-meta assoc :your "your-meta"))

(defn c-test []
  "c-test")
(meta (vary-meta my-meta assoc `c-test (fn [] "c-test1")))
