(ns build
  (:require [clojure.tools.build.api :as b]
            [clojure.data.json :as json]))

(def class-dir "/target/classes")

(def version (str (b/git-count-revs nil)))
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (format "target/lambda-%s.jar" version))

(defn clean [_]
      (b/delete {:path "/target"}))

(defn uber [_]
      (clean nil)
      (b/copy-dir {:src-dirs ["src" "resources"]
                   :target-dir class-dir})
      (b/write-file {:path   "/target/target.json"
                     :string (json/write-str {:file uber-file :version version}
                                             :escape-slash false)})
      (b/compile-clj {:basis basis
                      :src-dirs ["src"]
                      :class-dir class-dir})
      (b/uber {:class-dir class-dir
               :uber-file uber-file
               :basis basis}))
