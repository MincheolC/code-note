(ns build
  (:require [clojure.tools.build.api :as b]
            [clojure.data.json :as json]
            [clojure.java.shell :refer [sh]]
            [clojure.string :as str]))

(def commit-hash (-> (sh "git" "rev-parse" "--short" "HEAD")
                     :out
                     str/trim-newline))
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (format "target/%s.jar" commit-hash))

(defn clean [_]
      (b/delete {:path "target"}))

(defn uber [_]
      (clean nil)
      (b/write-file {:path "target/target.json"
                     :string (json/write-str {:file uber-file :version commit-hash}
                                             :escape-slash false)})
      (b/copy-dir {:src-dirs ["src" "resources"]
                   :ignores [".*env.*"]
                   :target-dir class-dir})
      (b/compile-clj {:basis basis
                      :src-dirs ["src"]
                      :class-dir class-dir})
      (b/uber {:class-dir class-dir
               :uber-file uber-file
               :basis basis}))
