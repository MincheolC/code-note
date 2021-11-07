(ns manual
  (:require [next.jdbc :as jdbc]
            [honey.sql :as h]
            [db :refer [execute! ds]]
            [time_util :as t]
            [util :as u]))

;; user-id, tx-type, tx-id, change-amount, deposit
(def tx-type "wire-transfer")
(def userid-map {"멜씨장터"	74
                 "주식회사바담" 677
                 "유한회사 유닛11"	769
                 "페어테이블"	797
                 "스위트밀"	906
                 "그린빈즈"	937
                 "행복한농부"	1131
                 "(주)포라"	4370
                 "린브랜딩"	5035
                 "주식회사 헬스랩" 10125})

(def wt-data [[["페어테이블" "2021-09-30 19:09:15" 28705119]
               ["페어테이블" "2021-09-09 19:16:45" 13844000]
               ["페어테이블" "2021-07-26 19:59:21" 1806000]
               ["페어테이블" "2021-07-12 19:50:48" 20000000]
               ["페어테이블" "2021-07-12 19:50:43" 12537660]
               ["페어테이블" "2021-07-12 19:50:41" 289361]
               ["페어테이블" "2021-06-25 15:42:12" 3382211]
               ["페어테이블" "2021-05-25 18:41:51" 4522855]]

              [["린브랜딩" "2021-10-05 12:11:14"	500]
               ["린브랜딩" "2021-10-01 09:46:10"	29633250]
               ["린브랜딩" "2021-09-30 18:59:44"	19000000]
               ["린브랜딩" "2021-09-10 10:20:14"	47643750]]

              [["멜씨장터"	"2021-09-13 23:15:13"	21009900]
               ["멜씨장터"	"2021-05-06 10:54:25"	1087800]]

              [["그린빈즈"	"2021-10-19 15:14:06"	60750000]]

              [["스위트밀"	"2021-09-30 15:07:28"	1748700]]

              [["유한회사 유닛11"	"2021-09-27 14:18:14"	8024800]
               ["유한회사 유닛11"	"2021-09-17 12:01:11"	6500600]
               ["유한회사 유닛11"	"2021-08-12 14:32:12"	8864580]
               ["유한회사 유닛11"	"2021-07-14 14:00:37"	11143300]]

              [["주식회사바담"	"2021-10-12 19:30:58"	73237400]
               ["주식회사바담"	"2021-09-27 16:04:45"	106740780]
               ["주식회사바담"	"2021-09-03 17:50:44"	153131955]]

              [["주식회사 헬스랩"	"2021-09-30 19:11:18"	4540343]]

              [["(주)포라"	"2021-09-27 18:40:42"	261900]
               ["(주)포라"	"2021-09-15 18:38:12"	190100]
               ["(주)포라"	"2021-09-06 19:18:37"	200800]
               ["(주)포라"	"2021-08-25 18:22:06"	2919500]
               ["(주)포라"	"2021-08-17 18:03:54"	1125500]
               ["(주)포라"	"2021-08-05 19:08:09"	1644150]
               ["(주)포라"	"2021-07-26 18:48:27"	510900]
               ["(주)포라"	"2021-07-15 18:49:50"	10249455]
               ["(주)포라"	"2021-07-05 19:47:53"	7720400]
               ["(주)포라"	"2021-06-25 18:07:14"	7788005]
               ["(주)포라"	"2021-06-15 18:07:16"	10840980]
               ["(주)포라"	"2021-06-07 11:10:05"	623600]]

              [["행복한농부"	"2021-09-30 19:24:41"	181395277]]])

(defn parse [data]
  (->>  data
        (map (fn [[n, d, v]]
              [(get userid-map n) (t/kst-str->utc-str d) v]))
        (sort-by second)))

(defn- update-user-deposit!
  "사용자의 주문 가능금액을 업데이트하고, 변경 내역을 추가함"
  [[user-id tx-id tx-created-at amount]]
  (let [total-amount amount
        update-query "UPDATE users SET deposit = deposit + ? WHERE id = ?"
        update-sql-params [update-query total-amount user-id]
        select-last-deposit-subqs [:ifnull
                                   {:select   :udc.deposit
                                    :from     [[:user_deposit_changes :udc]]
                                    :where    [:= :user_id user-id]
                                    :order-by [[:id :desc]]
                                    :limit    1}
                                   {:select   :u.deposit
                                    :from     [[:users :u]]
                                    :where    [:= :id user-id]}]
        sqlmap {:insert-into [:user_deposit_changes]
                :columns     [:user_id :tx_type :tx_id :change_amount :tx_created_at :deposit]
                :values      [[user-id tx-type tx-id amount tx-created-at [:+ amount select-last-deposit-subqs]]]}]
    (jdbc/with-transaction
      [tx ds]
      (execute! tx sqlmap {})
      (jdbc/execute-one! tx update-sql-params {})
      true)))

(defn update! [wts]
  (doseq [[id tx-created-at amount] wts]
    (let [tx-id (str "wt" (t/now-filename-str) (u/rand-string 5))]
      (update-user-deposit! [id tx-id tx-created-at amount]))))

(comment
  (->> (map parse wt-data)
       (map update!))
  (t/kst-str->utc-str "2021-09-30 19:09:15")
  )
