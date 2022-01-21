(ns migration
  (:require [migratus.core :as migratus]))

(def config {:store         :database
             :migration-dir "migrations/"
             :db            {:classname   "org.h2.Driver"
                             :subprotocol "h2:mem"
                             :subname     "sinsun_market;DB_CLOSE_DELAY=-1;MODE=MYSQL"}})

(comment
  (migratus/create config "cash-changes")

  (migratus/migrate config)
  (migratus/rollback config))
