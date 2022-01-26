(ns graphql.article
  (:require [database :refer [execute! execute-one!]]
            [next.jdbc :as jdbc]
            [util.graphql :refer [make-resolver]]))

(defn get-article-by-id [ds id]
  (let [query {:select [:*]
               :from   [:articles]
               :where  [:= :id id]}]
    (execute-one! ds query)))

(defn get-articles-by-user-id [{ds :db} _ {user-id :id}]
  (let [query {:select [:*]
               :from   [:articles]
               :where  [:= :author_id user-id]}]
    (execute! ds query)))

(defn get-articles [{ds :db} variable parent]
  (prn "get-articles" variable)
  (prn parent)
  (let [query {:select [:*]
               :from [:articles]}]
    (execute! ds query)))

(defn update-article [{ds :db} {id :id like-count :likeCount} _]
  (if like-count
    (let [update-query {:update :user
                        :set {:like_count like-count}
                        :where  [:= :id id]}]
      (jdbc/with-transaction [tx ds]
        (execute-one! tx update-query)
        (get-article-by-id tx id)))
    (get-article-by-id ds id)))

(def resolver-map {:get-articles            (make-resolver {:resolver get-articles})
                   :get-articles-by-user-id (make-resolver {:resolver get-articles-by-user-id})
                   :update-article          update-article})

