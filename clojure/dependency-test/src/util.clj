(ns util
  (:require [java-time :as t]
            [java-time.format :as tf]))

(defn now-ldt
  "현재날짜를 리턴합니다.
  tz이 없는 경우 UTC로 리턴합니다."
  ([] (now-ldt "UTC"))
  ([tz]
   (let [now (t/with-zone-same-instant (t/zoned-date-time) tz)]
     (.toLocalDateTime now))))
