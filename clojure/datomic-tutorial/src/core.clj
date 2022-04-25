(ns core
  (:require [datomic.client.api :as d]
            [global :refer [*event-id*]]
            [log :as log]
            [test :as test]))

(def cfg {:server-type :dev-local
          :system "datomic-samples"})

(def client (d/client cfg))

(d/create-database client {:db-name "movies"})
(def conn (d/connect client {:db-name "movies"}))

(def movie-schema [{:db/ident :movie/title
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one
                    :db/doc "The title of the movie"}

                   {:db/ident :movie/genre
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one
                    :db/doc "The genre of the movie"}

                   {:db/ident :movie/release-year
                    :db/valueType :db.type/long
                    :db/cardinality :db.cardinality/one
                    :db/doc "The year the movie was released in theaters"}])

(d/transact conn {:tx-data movie-schema})

(def first-movies [{:movie/title "The Goonies"
                    :movie/genre "action/adventure"
                    :movie/release-year 1985}
                   {:movie/title "Commando"
                    :movie/genre "thriller/action"
                    :movie/release-year 1985}
                   {:movie/title "Repo Man"
                    :movie/genre "punk dystopia"
                    :movie/release-year 1984}])

(d/transact conn {:tx-data first-movies})

(def db (d/db conn))
(def all-titles-q '[:find ?movie-title
                    :where [_ :movie/title ?movie-title]])

(d/q all-titles-q db)

(binding [*event-id* "test-event-id"]
  (log/info "hello")
  (test/ok))
