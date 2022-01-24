(ns graphql.route
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [com.walmartlabs.lacinia :as lacinia]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]
            [graphql.user :as gu]
            [medley.core :refer [deep-merge]]
            [ring.util.http-response :as hr]))

(defn- merge-all-schema []
  ;;; deep-merge 시 common 의 key-value 가 다른 schema 에 의해 overwrite 되는 것을 방지 하기 위해 끝에 배치해야함
  (->> ["schema/user.edn"]
       (map #(edn/read-string (slurp (io/resource %))))
       (apply deep-merge)))

(def schema
  (-> (merge-all-schema)
      (util/attach-resolvers (apply merge [gu/resolver-map]))
      schema/compile))

(defn handler [ctx]
  (fn [request]
    (let [query  (get-in request [:body-params :query])
          identity {:identity (:identity request)}
          result (lacinia/execute schema query nil (merge ctx identity))]
      (hr/ok result))))

(comment
  (merge-all-schema))
