(ns src.migration
  (:require [next.jdbc :as jdbc]
            [hikari-cp.core :refer [make-datasource]]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [limit]]))

(defonce ^:private db-config {:connection-timeout 30000
                              :minimum-idle       1
                              :maximum-pool-size  2
                              :pool-name "db-pool"
                              :adapter "mysql8"
                              :database-name "cljdev"
                              :server-name "127.0.0.1"
                              :port-number 3306
                              :username "dev"
                              :password "1234"})

(defonce ^:private ds (make-datasource db-config))

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