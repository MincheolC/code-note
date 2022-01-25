(ns graphql.user
  (:require [database :refer [insert! execute! execute-one!]]
            [next.jdbc :as jdbc]))

(defn get-user-by-id-query [id]
  {:select [:*]
   :from   [:user]
   :where  [:= :id id]})

(defn get-users [{ds :db} _ _]
  (let [query {:select [:*]
               :from [:user]}]
    (execute! ds query)))

(defn create-user [{ds :db} {:keys [name phone]} _]
  (let [insert-query {:insert-into :user
                      :values [{:name name :phone phone}]}]
    (jdbc/with-transaction [tx ds]
      (when-let [id (:generated-key (insert! tx insert-query))]
        (execute-one! tx (get-user-by-id-query id))))))

(defn update-user [{ds :db} {id :id username :name phone :phone} _]
  (if (or username phone)
    (let [update-query (cond-> {:update :user
                                :set {}
                                :where  [:= :id id]}
                               name (assoc-in [:set :name] username)
                               phone (assoc-in [:set :phone] phone))]
      (jdbc/with-transaction [tx ds]
        (execute-one! tx update-query)
        (execute-one! tx (get-user-by-id-query id))))
    (execute-one! ds (get-user-by-id-query id))))

(def resolver-map {:get-users get-users
                   :create-user create-user
                   :update-user update-user})

