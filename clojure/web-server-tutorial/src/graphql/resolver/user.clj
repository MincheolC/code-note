(ns graphql.resolver.user
  (:require [model :as m]))

(defn health-check
  [_ _ _]
  (str "hello, Greenlabs!"))

(defn get-users
  [{db :db} _ _]
  (m/fetch-users db))

(defn get-user-by-id
  [{db :db} {id :id} _]
  (m/fetch-user db id))

(defn add-user
  [{db :db} {name :name
             age  :age} _]
  (let [id (m/create-user db {:name name :age age})]
    (m/fetch-user db id)))

(defn update-user
  [{db :db} {id   :id
             name :name
             age  :age} _]
  (m/update-user db {:id id :name name :age age})
  (m/fetch-user db id))

(defn delete-user
  [{db :db} {id :id} _]
  (if-let [_ (pos? (m/delete-user db id))]
    id
    -1))

(def resolver-map
  {:health-check   health-check
   :get-users      get-users
   :get-user-by-id get-user-by-id
   :add-user       add-user
   :update-user    update-user
   :delete-user    delete-user})