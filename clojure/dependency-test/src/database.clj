(ns database
  (:require [next.jdbc :as jdbc]
            [hikari-cp.core :refer [make-datasource close-datasource]]
            [honeysql.core :as honeysql]
            [honeysql.format :as honeysql-format]
            [honeysql.helpers :refer [limit]]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(defonce ^:private db-config (-> "config.edn" io/resource slurp edn/read-string))
(defonce ds (make-datasource (db-config :mysql)))

(defmethod honeysql-format/format-clause :on-duplicate
  [[_ update-expr] _]
  (let [parts (for [[column value] update-expr]
                (str (honeysql-format/to-sql column) "=" (honeysql-format/to-sql value)))]
    (str "ON DUPLICATE KEY UPDATE " (str/join "," parts))))

;; place after :values
(honeysql-format/register-clause! :on-duplicate 225)

(defn execute!
  ([qs] (execute! qs {}))
  ([qs opts]
   (let [sql (honeysql/format qs {:dialect :mysql})]
     (jdbc/execute! ds sql opts))))

(defn execute-one!
  ([qs] (execute-one! qs {}))
  ([qs opts]
   (let [sql (honeysql/format (limit qs 1) {:dialect :mysql})]
     (jdbc/execute-one! ds sql opts))))

(comment
  (honeysql/format {:insert-into :user
                    :columns [:name :age]
                    :values [["greenlabs" 5]]
                    :on-duplicate {:age 5}} {:dialect :mysql})

  (honeysql/call :case
                 [:= :region3 "region3"] -1
                 :else 1)

  (close-datasource ds))

