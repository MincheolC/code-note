(ns graphql
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [com.walmartlabs.lacinia :as lacinia]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]
            [medley.core :refer [deep-merge]]
            [ring.util.http-response :as hr]
            [pet :as pet]))


(defn- build-options [context request]
  (let [operation-name (get-in request [:body-params :operationName])
        graphql-timeout-ms (get-in context [:config :graphql-timeout-ms])]
    (cond-> {}
            operation-name     (assoc :operation-name operation-name)
            graphql-timeout-ms (assoc :timeout-ms graphql-timeout-ms))))

(defn read-edns
  [path]
  (try
    (edn/read-string (slurp (io/resource path)))
    (catch Exception e
      (log/error path "is not formatted properly!!"))))

(def resolvers
  (merge {}
         pet/resolvers))

(def schema-paths
  (let [directory-path "schema/"]
    (map #(str directory-path %)
         ["pet.edn"])))

(def schema
  (let [schemas (->> schema-paths
                     (map read-edns)
                     (apply deep-merge))]
    (-> schemas
        (util/attach-resolvers resolvers)
        schema/compile)))

(defn handler
  [context]
  (fn [request]
    (let [query  (get-in request [:body-params :query])
          variables (get-in request [:body-params :variables])
          headers (:headers request)
          context (-> context
                      (assoc :headers headers))
          options (build-options context request)
          result (lacinia/execute schema query variables context options)]
      (hr/ok result))))
