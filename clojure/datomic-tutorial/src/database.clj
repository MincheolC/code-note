(ns database
  (:require [datomic.client.api :as d]))

(def ^:private cfg {:server-type :dev-local
                    :system "datomic-samples"})

(def ^:private client (d/client cfg))

;; Create a Database
(d/create-database client {:db-name "dev"})
;; Connect to database
(def conn (d/connect client {:db-name "dev"}))

(defn insert!
  "Transaction - Datomic은 datom 세트 추가하는 ACID transaction을 통해 업데이트된다."
  [data]
  (d/transact conn {:tx-data data}))

(defn fetch! [query]
  (d/q query (d/db conn)))

(defn ->ident [x]
  (hash-map :db/ident x))

(comment
  (d/delete-database client {:db-name "dev"}))


