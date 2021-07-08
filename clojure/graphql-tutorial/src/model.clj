(ns model
  (:require [db :refer :all]))

(defn fetch-users [db]
  (execute! db {:select [:*]
                :from [:user]}))

(defn fetch-user [db id]
  (execute-one! db {:select [:*]
                    :from [:user]
                    :where [:= :id id]}))

(defn create-user [db {:keys [name age]}]
  (execute! db {:insert-into [:user]
                :columns     [:name :age]
                :values      [[name age]]} {:return-keys true}))
