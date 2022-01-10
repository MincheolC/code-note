(ns db
  (:require [honey.sql :as sql]
            [next.jdbc.date-time :as dt]
            [next.jdbc :as jdbc]))

(defn execute-one! [db q]
  (let [qs (sql/format q {:dialect :mysql})]
    (jdbc/execute-one! db qs jdbc/unqualified-snake-kebab-opts)))

(defn execute! [db q]
  (let [qs (sql/format q {:dialect :mysql})]
    (jdbc/execute! db qs jdbc/unqualified-snake-kebab-opts)))

(defn get-user-by-id [db id]
  (execute-one! db {:select [:*]
                    :from   :users
                    :where  [:= :id id]}))

(comment
  (def ds (integrant.repl.state/system :db/mysql))
  (-> (execute! ds {:select [:settlement_date]
                    :from   :wholesale_market_orders
                    :limit  1})
      first
      :settlement-date
      type))
