(ns build
  (:require [clojure.tools.build.api :as b]
            [clojure.data.json :as json]))

(def version (format "%s" (b/git-count-revs nil)))
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"
                            :aliases [:dev]}))
(def uber-file (format "target/%s-%s.jar" "lambda" version))

(defn clean [_]
      (b/delete {:path "target"}))

(defn uber [_]
      (clean nil)
      (b/write-file {:path "target/target.json"
                     :string (json/write-str {:file uber-file :version version}
                                             :escape-slash false)})
      (b/copy-dir {:src-dirs ["src" "resources"]
                   :ignores [".*\\.xlsx", ".*env.*", ".*\\.svg", ".*\\.yml"]
                   :target-dir class-dir})
      (b/compile-clj {:basis basis
                      :src-dirs ["src"]
                      :class-dir class-dir})
      (b/uber {:class-dir class-dir
               :uber-file uber-file
               :basis basis}))
