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
  (q "{ backendTeam { name members { name } tech_stacks }}")
  (q "{ frontendTeam { name members { name } tech_stacks }}")
  (q "{ infraTeam { name members { name } tech_stacks }}")
  (q "{ searchTeamsByTechStack (tech_stack: \"AWS\"){ ...on BackendTeam {name tech_stacks} ...on FrontendTeam {name tech_stacks}}}")
  (q "{ searchTeamsByTechStack (tech_stack: \"AWS\"){ ...on BackendTeam {name tech_stacks} ...on FrontendTeam {name tech_stacks} ...on InfraTeam {name tech_stacks}}}")
  )
