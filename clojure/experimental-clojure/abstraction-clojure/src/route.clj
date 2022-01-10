(ns route
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [response]]
            [reitit.ring :refer [router ring-handler]]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.parameters :as params]
            [muuntaja.core :as m]
            [db]))

(defn ping [_]
  (response "poong"))

;; 최초 핸들러
#_(defn get-user [{:keys [db]}]
  (fn [request]
    (let [id (get-in request [:path-params :id])
          user (db/get-user-by-id db id)]
      {:status 200
       :body user})))

;; data-source를 제거하여 순수 함수로 만듬
;; - get-user-by-id는 동일한 signature를 가진 어떠한 함수로도 대체 될 수 있음 (stub/mock/wrapper 등)
(defn get-user [get-user-by-id req]
  (let [id (get-in req [:path-params :id])
        user (get-user-by-id id)]
    {:status 200
     :body user}))

(defn route->handler [ds route]
  (route {:get-user-by-id #(get-user
                             (partial db/get-user-by-id ds)
                             %)}))

(defn app
  [{ds :db config :config}]
  (ring-handler
    (router
      ["/api"
       ["/ping" {:get ping}]
       ["/users/:id" {:get (route->handler ds :get-user-by-id)}]]
      {:data {:config config
              :muuntaja m/instance
              :middleware [;; query-params & form-params
                           params/parameters-middleware
                           ;; content-negotiation & encoding, decoding req body
                           muuntaja/format-middleware]}})
    nil
    {:middleware [wrap-reload]}))
