(ns core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [response]]
            [reitit.ring :refer [router ring-handler]]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.parameters :as params]
            [muuntaja.core :as m]
            [util]))

(defn handler [req]
  (def *req req)
  (response "poong"))

(def reloadable-app
  (ring-handler
    (router
      ["/api"
       ["/ping" {:post handler}]]
      {:data {:muuntaja m/instance
              :middleware [;; query-params & form-params
                           params/parameters-middleware
                           ;; content-negotiation & encoding, decoding req body
                           muuntaja/format-middleware]}})
    nil
    {:middleware [wrap-reload]}))

(comment
  (run-jetty #'reloadable-app {:port 3000
                               :join? false})
  (:body-params *req)
  #unit/length [1 :km]
  )
