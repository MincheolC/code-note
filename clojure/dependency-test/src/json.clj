(ns json
  (:require [clojure.data.json :as json]
            [medley.core :as medley]))

(defn make-code-name-map [rs]
;;   (let [option-values (flatten (map #(json/read-str (:option-values %)) rs))]
;;     (into {}
;;           (map #(vector (get % "code") (get % "name"))
;;                option-values)))

  (let [option-values (->> (map #(json/read-str (:option-values %)) rs)
                           (apply concat))]
    (into {}
          (map #(vector (get % "code") (get % "name"))
               option-values))))

(def rs [{:option-values (json/write-str [{:code "O20210604730070b8517c0", :name "(소)3k"}
                                          {:code "O2021060427c92c1756170", :name "(소)5k"}])}])

(make-code-name-map rs)

(reduce (fn [m v] (prn m v)) {} [{:a 1 :b 2 :c 3}])
