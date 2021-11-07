(ns database
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.tools.logging :as log]
            [config]
            [hikari-cp.core :refer [make-datasource close-datasource]]
            [honey.sql :as honeysql]
            [honey.sql.helpers :refer [limit]]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]))

;(defonce ^:private db-config (-> "config.edn" io/resource slurp edn/read-string))

(defn- execute!
  ([db qs] (execute! db qs {:builder-fn rs/as-unqualified-kebab-maps}))
  ([db qs opts]
   (jdbc/execute! db qs opts)))

(defn- execute-one!
  ([db qs] (execute-one! db qs {:builder-fn rs/as-unqualified-kebab-maps}))
  ([db qs opts]
   (jdbc/execute-one! db qs opts)))

(defn- ->qs [query-map]
  (honeysql/format query-map {:dialect :mysql}))

(defn upsert! [conn table-name columns value]
  (let [sql (->qs {:insert-into             [table-name]
                   :columns                 columns
                   :values                  [value]
                   :on-duplicate-key-update (zipmap columns value)})]
    (execute! conn sql)))

(defn insert! [conn table-name values]
  (let [sql (->qs {:insert-into [table-name]
                   :values      values})]
    (execute! conn sql)))

(defn truncate! [conn table-name]
  (let [sql (->qs {:truncate [table-name]})]
    (execute! conn sql)))

(defn select [conn table-name]
  (let [sql (->qs {:select [:*]
                   :from [table-name]})]
    (execute! conn sql)))

(defn copy-table! [conn {:keys [from to]}]
  (let [sql (->qs {:create-table to
                   :raw          (format "LIKE `%s`" (name from))})]
    (execute! conn sql)))

(defn drop-table! [conn table-name]
  (let [sql (->qs {:drop-table table-name})]
    (execute! conn sql)))

(defn rename-table! [conn {:keys [from to]}]
  (let [sql (->qs {:alter-table from :rename-table to})]
    (execute! conn sql)))

(defn foreign-key-check-on [conn]
  (execute! conn (->qs {:raw "SET FOREIGN_KEY_CHECKS=1"})))

(defn foreign-key-check-off [conn]
  (execute! conn (->qs {:raw "SET FOREIGN_KEY_CHECKS=0"})))

(comment
  (def ds (config/get-db-conn))

  (jdbc/with-transaction [tx ds]
    ;(truncate! tx :user)
    (insert! ds :user [{:id 1 :name "min" :age 32}])
    (insert! tx :user [{:id 2 :age 32}]))

  (insert! ds :user [{:id 1 :name "min" :age 32}])
  (insert! ds :user_type [{:user_id 1 :type "farmer"}])
  (select ds :user)

  (let [origin-table :user
        temp-table :temp_user]
    (foreign-key-check-off ds)
    (try
      (jdbc/with-transaction [tx ds]
        (copy-table! tx {:from origin-table :to temp-table})
        (insert! tx temp-table [{:id 1 :name "min" :age 32}])
        (insert! tx temp-table [{:id 2 :name "charles" :age 32}])
        (insert! tx temp-table [{:name "gina" :age 34}])
        (drop-table! tx origin-table)
        (rename-table! tx {:from temp-table :to origin-table}))
      (catch Exception e
        (log/error e)
        (drop-table! ds temp-table)))
    (foreign-key-check-on ds)))

