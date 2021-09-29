(ns core
  (:require [clojure.tools.deps.alpha :as tools.deps]
            [clojure.tools.deps.alpha.reader :as tools.deps.reader]
            [clojure.java.io :as io]))

(def slurped-deps (tools.deps.reader/slurp-deps (io/file "deps.edn")))
(def deps-map (tools.deps.reader/merge-deps [(tools.deps.reader/install-deps) slurped-deps]))

(comment
  (parse-deps-map (slurped-deps) {})
  (tools.deps/resolve-deps deps-map {}))
