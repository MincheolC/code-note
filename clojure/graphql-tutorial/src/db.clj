(ns db
  (:require [next.jdbc :as jdbc]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [limit]]))

(defonce ^:private db-config {:dbtype "mysql"
                          :dbname "cljdev"
                          :host "127.0.0.1"
                          :port 3306
                          :user "dev"
                          :password "1234"})
(defonce ^:private ds (jdbc/get-datasource db-config))

(defn fetch!
  ([qs] (fetch! qs {}))
  ([qs opts]
   (let [sql (sql/format qs {:dialect :mysql})]
     (jdbc/execute! ds sql opts))))

(defn fetch-one!
  ([qs] (fetch-one! qs {}))
  ([qs opts]
   (let [sql (sql/format (limit qs 1) {:dialect :mysql})]
     (jdbc/execute-one! ds sql opts))))

; Migration
(comment
  (jdbc/execute! ds ["select 0"])
  (jdbc/execute! ds ["
  create table user (
    id int auto_increment primary key,
    name varchar(32) unique,
    age int
   );"])
  (jdbc/execute! ds ["insert into user (name, age) values ('mincheol', 32);"])
  (jdbc/execute! ds ["select * from user"]))