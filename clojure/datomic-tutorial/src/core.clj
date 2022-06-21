(ns core
  (:require [datomic.client.api :as d]
            [global :refer [*event-id*]]
            [log :as log]
            [test :as test]))

(def cfg {:server-type :dev-local
          :system "datomic-samples"})

(def client (d/client cfg))

;; Create a Database
(d/create-database client {:db-name "dev"})
;; Connect to database
(def conn (d/connect client {:db-name "dev"}))

;; :db/ident 속성은 엔티티의 고유한 이름을 지정
;; :db/cardinality 1:1 or 1:n 관계 설정
;; :db/doc 커멘트 같은 역할
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

(def first-movies [{:movie/title "The Goonies"
                    :movie/genre "action/adventure"
                    :movie/release-year 1985}
                   {:movie/title "Commando"
                    :movie/genre "thriller/action"
                    :movie/release-year 1985}
                   {:movie/title "Repo Man"
                    :movie/genre "punk dystopia"
                    :movie/release-year 1984}])

(defn insert! [connection data]
  (d/transact connection {:tx-data data}))

(defn fetch! [connection query]
  (d/q query (d/db connection)))

(comment
  (def all-titles-q '[:find ?movie-title
                      :where [_ :movie/title ?movie-title]])
  (insert! conn movie-schema)
  (insert! conn first-movies)

  (fetch! conn all-titles-q)

  (d/delete-database client {:db-name "dev"}))
