(ns google.auth
  (:require [clojure.data.json :as json]
            [buddy.sign.jws :as jws]
            [buddy.core.keys :as keys]
            [clojure.java.io :as io]))

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


;; GCP Token
(def iss "id-alimtalk-bot@greenlabs-project.iam.gserviceaccount.com")
(def sub "developer@greenlabs.co.kr")
(def private-key (keys/private-key (io/resource "priv.key")))
(def aud "https://oauth2.googleapis.com/token")

(defn create-jwt
  "참고: https://developers.google.com/identity/protocols/oauth2/service-account#authorizingrequests

   반환값 형식
   {Base64url encoded header}.{Base64url encoded claim set}.{Base64url encoded signature}"
  []
  (let [assertion-timestamp (quot (System/currentTimeMillis) 1000)
        headers {:alg "RS256"
                 :typ "JWT"}
        claim  {:iss iss
                :sub sub
                :scope "https://www.googleapis.com/auth/spreadsheets.readonly"
                :aud aud
                :exp (+ assertion-timestamp 3000)
                :iat assertion-timestamp}]
    (jws/sign (json/write-str claim) private-key {:header headers
                                                  :alg    :rs256})))


(comment
  (create-jwt))

