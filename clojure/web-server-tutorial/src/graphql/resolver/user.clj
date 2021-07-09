(ns graphql.resolver.user
  (:require [model :refer [fetch-users fetch-user]]))

(defn health-check
  [_ {name :name} _]
  (str "hello, " name " from Greenlabs!"))

;(def resolver-map
;  {:health-check health-check
;   ;:query/fetch-users (fn [{db :db} _ _]
;   ;                     (fetch-users db))
;   ;:query/fetch-user (fn [{db :db} _ {id :id}]
;   ;                    (fetch-user db id))
;   })

(def resolver-map
  {:health-check health-check})