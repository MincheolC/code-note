(ns dummy.user-deposit-changes
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [db :refer [execute! ds insert-dummy!]]
            [next.jdbc :as jdbc]
            [util :as u]))

(defn dummy-user-deposit-changes [{:keys [user_id tx_created_at created_at deposit]}]
  (let [tx-types ["order-complete" "order-cancel" "imweb-pay" "imweb-cancel"
                  "order-refund-delivery-delayed" "order-refund-defective-product" "cash-refund"]
        change-amount (u/rand-int-min-max -100000 100000)]
    {:user_id       user_id
     :tx_type    (rand-nth tx-types)
     :tx_id      (str/join (take 20 (repeatedly #(rand-int 10))))
     :change_amount change-amount
     :tx_created_at (u/plus-minutes tx_created_at 5)
     :created_at    (u/plus-minutes created_at 5)
     :deposit       (+ deposit change-amount)}))


(comment
  ;; user-deposit-changes
  (let [values (->> (iterate dummy-user-deposit-changes {:user_id 389 ; 234 389
                                                         :tx_created_at "2021-08-01T14:00"
                                                         :created_at "2021-08-01T14:00"
                                                         :deposit 0})
                    (take 104)
                    (rest))]
    (insert-dummy! :user_deposit_changes values)))
