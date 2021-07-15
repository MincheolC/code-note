(ns resolver
  (:require [clojure.java.io :as io]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [clojure.edn :as edn]))

(def data-map (-> "data.edn" io/resource slurp edn/read-string))

(defn health-check
  [_ {name :name} _]
  (str "hello, " name " from Greenlabs!"))

(defn user-by-id
  [_ args _]
  (let [users (get data-map :users)
        {:keys [id]} args]
    (->> (filter #(= (:id %) id) users)
         first)))

(defn users
  [_ _ _]
  (get data-map :users))

(defn backend-team
  [_ _ _]
  (let [members (get data-map :users)
        backend-team-data (get data-map :backend-team)]
    (assoc backend-team-data :members members)))

(defn frontend-team
  [_ _ _]
  (let [members (get data-map :users)
        frontend-team-data (get data-map :frontend-team)]
    (assoc frontend-team-data :members members)))

(defn infra-team
  [_ _ _]
  (let [members (get data-map :users)
        infra-team-data (get data-map :infra-team)]
    (assoc infra-team-data :members members)))

(defn search-teams-by-tech-stack
  [_ {:keys [tech_stack]} _]
  (let [be (-> data-map :backend-team (schema/tag-with-type :BackendTeam))
        fe (-> data-map :frontend-team (schema/tag-with-type :FrontendTeam))
        infra (-> data-map :infra-team (schema/tag-with-type :InfraTeam))]
    (->> [be fe infra]
         (filter (fn [{:keys [tech_stacks]}]
                   (.contains tech_stacks tech_stack))))))

(def resolver-map
  {:health-check health-check
   :user-by-id   user-by-id
   :users users
   :backend-team backend-team
   :frontend-team frontend-team
   :infra-team infra-team
   :search-teams-by-tech-stack search-teams-by-tech-stack})

(defn load-schema
  []
  (-> (io/resource "schema.edn")
      slurp
      edn/read-string
      (util/attach-resolvers resolver-map)
      schema/compile))
