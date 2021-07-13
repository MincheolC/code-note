(ns db
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [camel-snake-kebab.core :refer [->camelCase]]
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

(defn unqualified-camelcase-execute! [ds qs]
  (execute! ds qs {:builder-fn rs/as-unqualified-modified-maps
                   :label-fn   ->camelCase}))

(defn unqualified-camelcase-execute-one! [ds qs]
  (execute-one! ds qs {:builder-fn rs/as-unqualified-modified-maps
                       :label-fn   ->camelCase}))

(defn unqualified-execute-one! [ds qs]
  (execute-one! ds qs {:builder-fn rs/as-unqualified-lower-maps}))

(defn unqualified-kebab-execute! [ds qs]
  (execute! ds qs {:builder-fn rs/as-unqualified-kebab-maps}))
