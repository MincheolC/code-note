(ns time_util
  (:require [java-time :as t])
  (:import java.time.LocalDateTime
           java.time.format.DateTimeFormatter
           java.time.ZoneId))

(def str-format "yyyyMMddHHmmss")
(def str-formatter (DateTimeFormatter/ofPattern "yyyy-MM-dd HH:mm:ss"))
(def seoul-zone-id (ZoneId/of "Asia/Seoul"))

(defn kst-str->utc-str
  "yyyyMMddHHmmss 형식의 kst 날짜 -> UTC 날짜 변환"
  [kst-str]
  (let [utc-dt (-> (LocalDateTime/parse kst-str str-formatter)
                   (.atZone seoul-zone-id)
                   (t/with-zone-same-instant "UTC"))]
    (t/format str-format utc-dt)))

(defn now-ldt
  "현재 datetime을 리턴합니다.
  tz이 없는 경우 UTC로 리턴합니다."
  ([] (now-ldt "UTC"))
  ([tz]
   (let [now (t/with-zone-same-instant (t/zoned-date-time) tz)]
     (.toLocalDateTime now))))

(defn now-filename-str
  "Asia/Seoul tz의 날짜/시간을 yyyyMMddHHmmss 형식으로 반환합니다."
  []
  (t/format str-format (now-ldt "Asia/Seoul")))
