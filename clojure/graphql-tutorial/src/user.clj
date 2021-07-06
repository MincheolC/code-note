(ns user
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :as params]
            [ring.middleware.reload :as reload]
            [ring.util.response :as response]
            [reitit.ring :as ring]
            [reitit.ring.middleware.exception :as exception]
            [reitit.coercion.spec]
            [reitit.ring.coercion :as rrc]
            [clojure.spec.alpha :as s]
            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [clojure.pprint :refer [pprint]]))

(defn handler [request]
  {:status 200
   :header {"Content-Type" "text/html"}
   :body "Hello World!! version 2"})

(defn admin-handler [request]
  (response/response "Version 2 Admin"))

(defn user-handler [request]
  (response/response "Version 2 User"))

(defn user-creator [request]
  (pprint request)
  (response/response "Version 2 User Creation"))

(s/def ::user-id int?)
(s/def ::name string?)
(s/def ::age int?)

(def app
  (ring/ring-handler
    (ring/router
      [["/v2"
        [""  {:get handler}]
        ["/admin" {:get admin-handler}]
        ["/users"
         ["" {:post {:handler user-creator
                     :parameters {:body (s/keys :req-un [::name ::age])}}}]
         ["/:user-id" {:get user-handler
                       :parameters {:path (s/keys :req-un [::user-id])}}]]]]
      {:data {:muuntaja m/instance
              :coercion reitit.coercion.spec/coercion
              :middleware [params/wrap-params
                           muuntaja/format-middleware
                           rrc/coerce-exceptions-middleware
                           rrc/coerce-request-middleware
                           rrc/coerce-response-middleware
                           exception/exception-middleware]}})
    (ring/create-default-handler)))

(def reloadable-app
  (reload/wrap-reload #'app))

(defonce server (run-jetty reloadable-app {:port    3000
                                           :join? false}))

(comment
  (.stop server)
  (.start server)
  )
