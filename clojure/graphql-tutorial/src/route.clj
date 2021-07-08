(ns route
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :as params]
            [reitit.ring :as ring]
            [reitit.ring.middleware.exception :as exception]
            [reitit.coercion.spec]
            [reitit.ring.coercion :as rrc]
            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [controller :refer :all]
            [clojure.pprint :refer [pprint]]))

(def db-middleware
  {:name ::db
   :compile (fn [{:keys [db]} _]
              (fn [handler]
                (fn [req]
                  (handler (assoc req :db db)))))})

(defn app
  [config]
  (ring/ring-handler
    (ring/router
      [["/v2"
        [""  {:get handler}]
        ["/admin" {:get admin-handler}]
        ["/users"
         ["" {:post {:handler user-creator
                     :parameters {:body {:name string?
                                         :age int?}}}
              :get {:handler users-handler}}]
         ["/:user-id" {:get user-handler
                       :parameters {:path {:user-id int?}}}]]]]
      {:data {:db (config :db)
              :muuntaja m/instance
              :coercion reitit.coercion.spec/coercion
              :middleware [params/wrap-params
                           muuntaja/format-middleware
                           rrc/coerce-exceptions-middleware
                           rrc/coerce-request-middleware
                           rrc/coerce-response-middleware
                           exception/exception-middleware
                           db-middleware]}})
    (ring/create-default-handler)))
