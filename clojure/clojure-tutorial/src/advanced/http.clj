(ns advanced.http
  (:require [clj-http.client :as client]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clojure.string :as str]))

(defn str->xml [str-data]
  (-> str-data
      (.getBytes "UTF-8")
      (java.io.ByteArrayInputStream.)
      (xml/parse)))

(defn xml->vec [xml-data]
  (->> xml-data
       zip/xml-zip
       zip/down
       zip/right))

(def response (client/get "http://www.garak.co.kr/publicdata/dataOpen.do?id=2782&passwd=Thefarm0601!&dataid=data38&pagesize=10&pageidx=1&portal.templet=false&market=garak&s_date=20210722&s_date_p=20210721&s_date_p7=20210715&s_pum_nm=2&s_pummok=고구마"))
(-> (:body response)
    str->xml
    xml->vec)

