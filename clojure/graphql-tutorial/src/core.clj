(ns core
  (:require
    [resolver :as r]
    [com.walmartlabs.lacinia :as lacinia]))

(def schema (r/load-schema))

(defn q
  [query-string]
  (lacinia/execute schema query-string nil nil))


(comment
  (q "{ healthCheck }")
  (q "{ userById (id: 1) { id name age role active }}")
  (q "{ users { id name age }}")
  (q "{ backendTeam { name members { name } tech_stack }}")
  (q "{ frontendTeam { name members { name } tech_stack }}")
  )