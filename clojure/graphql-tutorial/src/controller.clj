(ns controller
  (:require [ring.util.http-response :as hr]
            [model :refer :all]))

(defn handler [request]
  {:status 200
   :header {"Content-Type" "text/html"}
   :body "Hello World!! version 2"})

(defn admin-handler [request]
  (hr/ok "Version 2 Admin"))

(defn user-handler [{:keys [parameters]}]
  (hr/ok (fetch-user (-> parameters :path :user-id))))

(defn users-handler [request]
  (hr/ok (fetch-users)))

(defn user-creator [{:keys [parameters]}]
  (let [{:keys [GENERATED_KEY]} (-> (parameters :body)
                                    create-user
                                    first)]
    (hr/ok (fetch-user GENERATED_KEY))))