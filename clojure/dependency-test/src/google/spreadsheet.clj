(ns google.spreadsheet
  (:require [google.auth :as ga]
            [http.core :as http]))

;;; 전역 상수
;; GCP SpreadSheet
(def aud "https://oauth2.googleapis.com/token")
(def sheet-id "1COoW56fu6ZQrXrmtTFYd9WeF6aILQokFwBofQ8VCB9o")
(def sheet-name "도매출하내역") ; 도매출하내역 (개발용시트)수정하지마세요
(def spreadsheet-url (format "https://sheets.googleapis.com/v4/spreadsheets/%s/values:batchGet" sheet-id))
(def from 1)
(def to 17000)
(def ranges (format "'%s'!A%s:AD%s" sheet-name from to)) ; 'sheet-name'!from:to
(def major-dimension "ROWS") ; or COLUMNS


(defn fetch-token []
  (http/post' {:url aud
               :headers {:content-type "application/json"}
               :body {:grant_type "urn:ietf:params:oauth:grant-type:jwt-bearer"
                      :assertion (ga/create-jwt)}}))

(defn fetch-spreadsheet [access-token]
  (http/get' {:url spreadsheet-url
              :headers {:authorization (str "Bearer " access-token)}
              :query-params {:ranges ranges
                             :majorDimension major-dimension}}))
{
 (comment
   (def token (:access_token (fetch-token)))
   (def values (-> (fetch-spreadsheet token)
                   :valueRanges
                   first
                   :values))
   (count values)                                           ; 17000
   (def exists-vals (remove #(some #{"#N/A"} %) values))
   (count exists-vals)                                      ; 16666
   (count (filter #(some #{"#REF!"} %) exists-vals))        ; 8

   )}
