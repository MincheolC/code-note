(ns config
  (:require [clojure.java.io :as io]))

(def ^:private local-env
  (try
    (read-string (slurp (io/resource "env.edn")))
    (catch Throwable _
      nil)))

;; Public
(defn get-env
  "환경변수를 먼저 확인한 후에 env.edn 파일에서 변수를 가져옵니다."
  [key]
  {:pre [(keyword? key)]}
  (or (System/getenv (name key)) (key local-env)))

(def imweb-api-url (get-env :IMWEB_API_URL))
(def imweb-api-key (get-env :IMWEB_API_KEY))
(def imweb-api-secret (get-env :IMWEB_API_SECRET))
