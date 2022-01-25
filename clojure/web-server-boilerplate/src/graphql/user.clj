(ns graphql.user
  (:require [database :refer [execute! execute-one!]]
            [next.jdbc :as jdbc]))

(defn get-users [{ds :db} _ _]
  (let [query {:select [:*]
               :from [:user]}]
    (execute! ds query)))

(defn create-user [{ds :db} {:keys [name phone]} _]
  (let [insert-query {:insert-into :user
                      :values [{:name name :phone phone}]}
        select-query (fn [id] {:select [:*]
                               :from   [:user]
                               :where  [:= :id id]})]
    (jdbc/with-transaction [tx ds]
      (when-let [id (:generated-key (execute-one! tx insert-query))]
        (execute-one! tx (select-query id))))))

(def resolver-map {:get-users get-users
                   :create-user create-user})
