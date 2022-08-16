(ns main
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [reitit.ring :refer [router ring-handler]]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.parameters :as params]
            [muuntaja.core :as m]
            [graphql :as graphql]))


(def app
  (ring-handler
    (router
      ["/graphql" {:post {:summary   "graphql handler"
                          :handler   (graphql/handler {})}}]
      {:data {:muuntaja m/instance
              :middleware [;; query-params & form-params
                           params/parameters-middleware
                           ;; content-negotiation & encoding, decoding req body
                           muuntaja/format-middleware]}})
    nil
    {}))

(def reloadable-app (wrap-reload app))

(comment
  (defonce server (run-jetty #'reloadable-app {:port  8080
                                               :join? false})))
