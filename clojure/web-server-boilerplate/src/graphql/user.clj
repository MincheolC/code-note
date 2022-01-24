(ns graphql.user
  (:require [database :refer [execute!]]))

(defn get-users [{ds :db} _ _]
  (let [query {:select [:*]
               :from [:user]}]
    (execute! ds query)))

(def resolver-map {:get-users get-users})
