(ns config
  (:require [clojure.java.io :as io]
            [next.jdbc :as jdbc]))

(def ^:private local-env
  (try
    (read-string (slurp (io/resource "config.edn")))
    (catch Throwable _
      nil)))

(defn get-env
  "환경변수를 먼저 확인한 후에 env.edn 파일에서 변수를 가져옵니다."
  [key]
  {:pre [(keyword? key)]}
  (or (System/getenv (name key)) (key local-env)))

(def ^:private db-connection {:dbname   (get-env :DB_NAME)
                              :host     (get-env :DB_HOST)
                              :user     (get-env :DB_USER)
                              :password (get-env :DB_PASSWORD)
                              :dbtype            "mysql"
                              :port              3306
                              :useUnicode        true
                              :characterEncoding "utf-8"})

;; Public
(defn get-db-conn
  "db-connection 설정을 기반으로 생선한 jdbc connection을 리턴합니다."
  []
  (-> db-connection
      jdbc/get-datasource
      jdbc/get-connection))
