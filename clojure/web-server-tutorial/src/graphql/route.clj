(ns graphql.route
  (:require [ring.util.http-response :as hr]
            [clojure.java.io :as io]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [clojure.edn :as edn]
            [com.walmartlabs.lacinia :as lacinia]
            [taoensso.timbre :refer [spy]]
            [graphql.resolver.user :as gru]))

(defn load-schema
  []
  (-> (io/resource "schema.edn")
      slurp
      edn/read-string
      (util/attach-resolvers (merge gru/resolver-map {}))
      schema/compile))

(defn graphql-handler
  [request]
  (let [schema (load-schema)
        db (get request :db)
        query (get-in request [:body-params :query])
        variables (get-in request [:body-params :variables])]
    (hr/ok (lacinia/execute schema query variables {:db db}))))

(defn routes [handler]
  ["/graphql" {:post {:summary "GraphQL handler"
                      :handler handler
                      :parameters {:body any?}}}])