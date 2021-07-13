(ns src.user
  (:require [integrant.repl :refer :all]
            [integrant.core :as ig]
            [integrant.repl.state :as state]
            [core]))

(set-prep! (fn [] (-> "dev/resources/config.edn" slurp ig/read-string)))

(comment
  (clojure.tools.namespace.repl/set-refresh-dirs "src")
  (go)
  (halt)
  (reset)
  )
(clojure.tools.namespace.repl/set-refresh-dirs "src")
(go)
(halt)
(reset)