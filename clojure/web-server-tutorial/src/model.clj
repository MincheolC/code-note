(ns model
  (:require [db :refer :all]))

(defn fetch-users [db]
  (unqualified-camelcase-execute! db {:select [:*]
                                      :from   [:user]}))

(defn fetch-user [db id]
  (unqualified-camelcase-execute-one! db {:select [:*]
                                          :from   [:user]
                                          :where  [:= :id id]}))

(defn create-user [db {:keys [name age]}]
  (let [result (execute! db {:insert-into [:user]
                             :columns     [:name :age]
                             :values      [[name age]]} {:return-keys true})]
    (-> result first :GENERATED_KEY)))

(defn update-user [db {:keys [id name age]}]
  (execute! db {:update [:user]
                :set    {:name name
                         :age  age}
                :where  [:= :id id]} {:return-keys true}))

(defn delete-user [db id]
  (let [result (execute! db {:delete-from [:user]
                             :where       [:= :id id]})]
    (-> result first :next.jdbc/update-count)))
