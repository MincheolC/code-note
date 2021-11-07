(ns util
  (:require [java-time :as t]))

(defn rand-int-min-max
  "max here is inclusive"
  [min max]
  (+ min (rand-int (- max min))))

(defn- rand-char []
  (char (rand-int-min-max 65 122)))

(defn rand-string [length]
  (apply str (repeatedly length rand-char)))

(defn rand-date
  ([n] (rand-date (t/local-date) n))
  ([from n] (let [days (rand-int-min-max 0 n)]
    (.toString (t/plus (t/local-date from) (t/days days))))))

(defn plus-minutes [start-dt n]
  (.toString (t/plus (t/local-date-time start-dt) (t/minutes n))))

(comment
  (plus-minutes "2021-10-21T00:00" 5))