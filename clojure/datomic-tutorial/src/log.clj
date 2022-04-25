(ns log
  (:require [global :refer [*event-id*]]))

(defn info [msg]
  (prn *event-id* msg))
