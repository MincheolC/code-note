(ns model
  (:require [honey.sql :as hsql]
            [honey.sql.helpers :as h]
            [db :refer :all]))

(defn fetch-users []
  (fetch! {:select [:*]
           :from [:user]}))

(defn fetch-user [id]
  (fetch-one! {:select [:*]
           :from [:user]
           :where [:= :id id]}))

(defn create-user [{:keys [name age]}]
  (fetch! {:insert-into [:user]
           :columns [:name :age]
           :values [[name age]]} {:return-keys true}))

(comment
  (create-user {:name "charles" :age 32})
  (fetch-users)
  (fetch-user 1))