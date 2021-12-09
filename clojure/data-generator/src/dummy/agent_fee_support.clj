(ns dummy.agent-fee-support
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [db :refer [execute! ds insert-dummy!]]
            [next.jdbc :as jdbc]
            [util :as u]))

(defn dummy-data [{:keys [producer-code from to]}]
  {:producer-code producer-code
   :from to
   :to (u/plus-days to 3)
   :rate (u/rand-int-min-max 1 50)
   :agent-name (u/rand-name)
   :product-category-code-id (str "FM_" (u/rand-int-min-max 100000 110000))
   :bank-name "우리은행"
   :bank-account "1002-123-12341234"
   :bank-account-owner ""})

(comment
  ;; user-deposit-changes
  (let [values (->> (iterate dummy-data {:producer-code "G-10001" ; 234 389
                                         :tx_created_at "2021-12-01T14:00"
                                         :created_at "2021-12-07T14:00"
                                         :deposit 0})
                    (take 104)
                    (rest))]
    (insert-dummy! :agent-fee-support values)))


