(ns core
  (:require [next.jdbc :as jdbc]
            [honey.sql :as sql]))

(def db {:dbtype "h2:mem"
         :dbname "sinsun_market"})

(def ds (jdbc/get-datasource db))

(defn insert-cash-changes-qs []
  (sql/format {:insert-into [:cash_changes]
               :columns     [:id :user_id :charge_id :change_type :amount :order_product_no]
               :values      [[1 1 1 "CHARGE" 10000 nil]
                             [2 1 nil "PAY" -10000 "OP1"]]}
              {:dialect :mysql}))

(comment
  (jdbc/execute! ds ["show tables"])
  (jdbc/execute! ds ["select * from cash_changes"])
  (jdbc/execute! ds (insert-cash-changes-qs)))
