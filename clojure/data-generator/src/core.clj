(ns core
  (:require [clojure.data.json :as json]
            [db :refer [execute!]]
            [util :as u]))

(defn dummy []
  {:template_code "soldoutsoon"
   :count (u/rand-int-min-max 1000 3000)
   :sent_by "alimtalk-soldoutsoon"
   :reason (json/write-str {:request-at (u/rand-date "2021-09-01" 50)
                            :state "시즌종료예고"
                            :product-name (u/rand-string 50)})})

(defn insert-dummy! [n]
  (let [values (repeatedly n dummy)]
    (execute! {:insert-into [:notification_alimtalk]
               :values values})))

(comment
  (insert-dummy! 1000))
