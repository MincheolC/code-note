(ns google.auth
  (:require [clojure.data.json :as json]
            [buddy.sign.jws :as jws]
            [buddy.core.keys :as keys]))

;; 1. 서비스 계정 만들기
;; 2. 승인된 API 호출 준비
;;   - JWT 만들기
;;   - JWT 헤더 (RSA256)
(def JWT_HEADER {:alg "RS256"
                 :typ "JWT"})
;; (def PRIV_KEY (keys/private-key "resources/priv_test.key"))
;; (def JWT_CLAM {:iss "sheet-test@homess-269411.iam.gserviceaccount.com"
;;                :scope "https://www.googleapis.com/auth/spreadsheets.readonly"
;;                :aud "https://oauth2.googleapis.com/token"
;;                :exp 0
;;                :iat 0})

(def PRIV_KEY (keys/private-key "resources/priv.key"))
(def JWT_CLAM {:iss "id-alimtalk-bot@greenlabs-project.iam.gserviceaccount.com"
               :sub "developer@greenlabs.co.kr"
               :scope "https://www.googleapis.com/auth/spreadsheets.readonly"
               :aud "https://oauth2.googleapis.com/token"
               :exp 0
               :iat 0})

(def GRANT_TYPE "urn:ietf:params:oauth:grant-type:jwt-bearer")

(defn jwt []
  (let [assertion-time (quot (System/currentTimeMillis) 1000)
        claim (-> JWT_CLAM
                  (assoc :iat assertion-time)
                  (assoc :exp (+ assertion-time 3000)))]
    (jws/sign (json/write-str claim) PRIV_KEY {:header JWT_HEADER :alg :rs256})))


(prn (jwt))

