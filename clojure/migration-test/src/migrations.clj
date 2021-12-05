(ns migrations
  (:require [migratus.core :as migratus]
            [hikari-cp.core :as hk]))

(def config {:store                :database
             :migration-dir        "migrations/"
             :init-script          "init.sql"
             :migration-table-name "migratus_migrations"
             :db {:datasource (hk/make-datasource {:adapter       "mysql8"
                                                   :username      "dev"
                                                   :password      "1234"
                                                   :server-name   "localhost"
                                                   :port-number   3306
                                                   :database-name "cljdev"})}})

(defn init!
  "init.sql을 실행."
  []
  (migratus/init config))

(defn migrate-up!
  "실행되지 않은 모든 마이그레이션을 실행"
  []
  (migratus/migrate config))

(defn rollback!
  "가장 마지막에 실행된 마이그레이션 1개를 롤백"
  []
  (migratus/rollback config))

(defn create-migration-files
  "마이그레이션 파일쌍(up & down)을 생성"
  [desc]
  (migratus/create config desc))

(comment
  (create-migration-files "init")

  (init!)
  (migrate-up!)
  (rollback!))

