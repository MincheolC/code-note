(ns graphql.resolver.user
  (:require [model :refer [fetch-users fetch-user]]))

(defn health-check
  [_ _ _]
  (str "hello, Greenlabs!"))

(defn get-users
  [{db :db} _ _]
  (fetch-users db))

(defn get-user-by-id
  [{db :db} {id :id} _]
  (fetch-user db id))

(def resolver-map
  {:health-check health-check
   :get-users get-users
   :get-user-by-id get-user-by-id})