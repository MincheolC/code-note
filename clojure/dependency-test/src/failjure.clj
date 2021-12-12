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


(defn testA [pred]
  (if pred
    (f/fail "Failed A")
    (do
      (prn "do something")
      "A")))

(defn testB [pred]
  (if pred
    (f/fail "Failed B")
    (do
      (prn "do something")
      "B")))

(defn testC [pred]
  (if pred
    (f/fail "Failed C")
    (do
      (prn "do something")
      "C")))

(defn fails [] (f/attempt-all [resultA (testA true)
                            resultB (testB false)
                            resultC (testC true)]
                           (prn resultA resultB resultC)
                           (f/when-failed [e]
                                          (prn e)
                                          e)))
(f/if-let-failed? [result (fails)]
                  (prn result)
                  (prn "success"))

(f/failed? false)
(f/failed? (f/fail "c"))

(defn parse-row [row]
  (-> row
      (update :a #(Float/parseFloat %))))

(defn tests [pred]
  (if pred
    (f/fail "f")
    [{:a "1"}]))

(f/attempt-all [result (tests true)
                result (map parse-row result)]
               result
               (f/when-failed [e]
                              e))
