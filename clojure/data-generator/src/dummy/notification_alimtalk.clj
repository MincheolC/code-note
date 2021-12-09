(ns dummy.notification-alimtalk
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [db :refer [execute! ds insert-dummy!]]
            [next.jdbc :as jdbc]
            [util :as u]))

(defn dummy-notification_alimtalk [_]
  {:template_code "soldoutsoon"
   :count (u/rand-int-min-max 1000 3000)
   :sent_by "alimtalk-soldoutsoon"
   :reason (json/write-str {:request-at (u/rand-date "2021-09-01" 50)
                            :state "시즌종료예고"
                            :product-name (u/rand-string 50)})})

(comment
  ;; notification_alimtalk
  (let [values (->> (iterate dummy-notification_alimtalk {})
                    (take 10)
                    (rest))]
    (insert-dummy! :notification_alimtalk values)))

(comment
  ;; tx test
  (jdbc/with-transaction [tx ds]
    (let [values (->> (iterate dummy-notification_alimtalk {})
                      (take 2)
                      (rest))]
      (execute! tx {:insert-into [:notification_alimtalk]
                    :values values} {}))

    (let [values (->> (iterate dummy-user-deposit-changes {:user_id 389 ; 234 389
                                                           :tx_created_at "2021-08-01T14:00"
                                                           :created_at "2021-08-01T14:00"
                                                           :deposit 0})
                      (take 2)
                      (rest))]
      (execute! tx {:insert-into [:user_deposit_changes]
                    :values values} {}))))

