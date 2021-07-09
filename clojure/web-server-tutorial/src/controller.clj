(ns controller
  (:require [ring.util.http-response :as hr]
            [model :refer :all]
            [clojure.pprint :refer [pprint]]))

(defn handler [_]
  (hr/ok "Hello World!! Version 2"))

(defn admin-handler [_]
  (hr/ok "Version 2 Admin"))

(defn user-handler [{:keys [db parameters]}]
  (hr/ok (fetch-user db (-> parameters :path :user-id))))

(defn users-handler [{:keys [db]}]
  (hr/ok (fetch-users db)))

(defn user-creator [{:keys [db parameters]}]
  (let [{:keys [body]} parameters
        {:keys [GENERATED_KEY]} (first (create-user db body))]
    (hr/ok (fetch-user db GENERATED_KEY))))