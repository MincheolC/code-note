(ns failjure
  (:require [failjure.core :as f]
            [next.jdbc :as jdbc]
            [database :refer [execute! ds]]))

(f/fail "Failed")

(defn handle-error [e] (str "Error: " (f/message e)))
(f/attempt handle-error (f/fail "failure"))

(f/try*
 (throw (Exception. "Fail")))

(let [result (f/ok-> (throw (Exception. "Fail")))]
  (when (f/failed? result)
    result))

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

