(ns core
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [db :refer [execute!]]
            [util :as u]))

(defn dummy-notification_alimtalk [_]
  {:template_code "soldoutsoon"
   :count (u/rand-int-min-max 1000 3000)
   :sent_by "alimtalk-soldoutsoon"
   :reason (json/write-str {:request-at (u/rand-date "2021-09-01" 50)
                            :state "시즌종료예고"
                            :product-name (u/rand-string 50)})})

(defn dummy-user-deposit-changes [{:keys [user_id tx_created_at created_at deposit]}]
  (let [tx-types ["order-complete" "order-cancel" "imweb-pay" "imweb-cancel"
                     "order-refund-delivery-delayed" "order-refund-defective-product"]
        change-amount (u/rand-int-min-max -100000 100000)]
    {:user_id       user_id
     :tx_type    (rand-nth tx-types)
     :tx_id      (str/join (take 20 (repeatedly #(rand-int 10))))
     :change_amount change-amount
     :tx_created_at (u/plus-minutes tx_created_at 5)
     :created_at    (u/plus-minutes created_at 5)
     :deposit       (+ deposit change-amount)}))

(defn insert-dummy! [table-name values]
  (execute! {:insert-into [table-name]
             :values values}))

(comment
  ;; notification_alimtalk
  (let [values (->> (iterate dummy-notification_alimtalk {})
                    (take 10)
                    (rest))]
    (insert-dummy! :notification_alimtalk values))

  ;; user-deposit-changes
  (let [values (->> (iterate dummy-user-deposit-changes {:user_id 389
                                                         :tx_created_at "2021-10-19T00:00"
                                                         :created_at "2021-10-19T00:00"
                                                         :deposit 0})
                    (take 104)
                    (rest))]
    (insert-dummy! :user_deposit_changes values)))
