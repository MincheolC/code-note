(ns db
  (:require [next.jdbc :as jdbc]
            [hikari-cp.core :refer [make-datasource]]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [limit]]))

(defn execute!
  ([ds qs] (execute! ds qs {}))
  ([ds qs opts]
   (let [sql (sql/format qs {:dialect :mysql})]
     (jdbc/execute! ds sql opts))))

(defn execute-one!
  ([ds qs] (execute-one! ds qs {}))
  ([ds qs opts]
   (let [sql (sql/format (limit qs 1) {:dialect :mysql})]
     (jdbc/execute-one! ds sql opts))))
