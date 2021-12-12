(ns debugging.core)

(try
  (/ 1 0)
  (catch Exception e
    (prn e)))

