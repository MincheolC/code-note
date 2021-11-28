(ns db
  (:require [next.jdbc :as jdbc]
            [hikari-cp.core :refer [make-datasource close-datasource]]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [limit]]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.tools.logging :as logger]))

(defonce ^:private db-config (-> "config.edn" io/resource slurp edn/read-string))
(defonce ds (make-datasource (db-config :mysql)))

(defn execute!
  ([qs] (execute! qs {}))
  ([qs opts]
   (let [sql (sql/format qs {:dialect :mysql})]
     (jdbc/execute! ds sql opts)))
  ([db qs opts]
   (let [sql (sql/format qs {:dialect :mysql})]
     (jdbc/execute! db sql opts))))

(defn execute-one!
  ([qs] (execute-one! qs {}))
  ([qs opts]
   (let [sql (sql/format (limit qs 1) {:dialect :mysql})]
     (jdbc/execute-one! ds sql opts)))
  ([db qs opts]
   (let [sql (sql/format (limit qs 1) {:dialect :mysql})]
     (jdbc/execute-one! db sql opts))))

(comment
  (sql/format {:insert-into :user
               :columns [:name :age]
               :values [["greenlabs" 5]]
               :on-duplicate {:age 5}} {:dialect :mysql})

  (sql/call :case
                 [:= :region3 "region3"] -1
                 :else 1)

  (close-datasource ds))

(comment
  (->> (range 5)
       (logger/spy)
       (map inc)
       (logger/spy)
       (filter even?)))

;(binding [logger/*tx-agent-levels* #{:info :warn :debug}]
;  (logger/spy "hello"))

;(logger)

