(ns failjure
  (:require [failjure.core :as f]))

(f/fail "Failed")

(defn handle-error [e] (str "Error: " (f/message e)))
(f/attempt handle-error (f/fail "failure"))

(f/try*
 (throw (Exception. "Fail")))

;; Uncaught Exception
(let [result (f/ok-> (throw (Exception. "Fail")))]
  (when (f/failed? result)
    result))

;; Test if-let-ok? & attempt-all
(defn a [m]
  (assoc m :a 1))

(defn b [pred m]
  (if pred
    (f/fail "Failed B")
    (assoc m :b 2)))

(defn c [pred m]
  (prn "c")
  (if pred
    (f/fail "Failed C")
    (assoc m :c 2)))

(f/if-let-ok? [result (f/ok->> {}
                               a
                               (b false)
                               (c false))]
              result
              result)

(let [resultA (f/ok? (b false {}))
      resultB (f/ok? (c true {}))]
  (prn resultA resultB))

(f/attempt-all [resultA (b false {})
                resultB false
                resultC (f/ok->> {}
                                 a
                                 (b resultB)
                                 (c false))]
               (prn resultA resultB resultC)
               (f/when-failed [e]
                              (prn e)))

(f/failed? false)
(f/failed? (f/fail "c"))
