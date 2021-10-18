(ns imweb
  (:require [config :refer [imweb-api-url imweb-api-key imweb-api-secret]]
            [clojure.string :as str]
            [clojure.data.json :as json]
            [http]))

(defn fetch-token []
  (http/post' {:url (str imweb-api-url "/auth")
               :headers {:content-type "application/json"}
               :body {:key imweb-api-key
                      :secret imweb-api-secret}}))

(defn fetch-users [token]
  (http/get' {:url (str imweb-api-url "/member/members")
              :headers {:accept "application/json"
                        :content-type "application/json"
                        :access-token token}}))

(defn fetch-orders [token]
  (http/get' {:url (str imweb-api-url "/shop/orders")
              :headers {:accept "application/json"
                        :content-type "application/json"
                        :access-token token}}))

(defn fetch-products [token]
  (http/get' {:url (str imweb-api-url "/shop/products")
              :headers {:accept "application/json"
                        :content-type "application/json"
                        :access-token token}}))

(defn fetch-products-options [token product-id]
  (http/get' {:url (str imweb-api-url "/shop/products/" product-id "/options")
              :headers {:accept "application/json"
                        :content-type "application/json"
                        :access-token token}}))

(defn fetch-products-options-details [token product-id]
  (-> (http/get' {:url     (str imweb-api-url "/shop/products/" product-id "/options-details")
               :headers {:accept       "application/json"
                         :content-type "application/json"
                         :access-token token}})
      :data
      :list))

(defn fetch-prod-orders [token order-nos]
  (http/get' {:url (str imweb-api-url "/shop/prod-orders")
              :headers {:accept "application/json"
                        :content-type "application/json"
                        :access-token token}
              :body {:order_no order-nos}}))

(defn patch-products-options-details!
  "imweb 정책: 1초 5회 요청 가능"
  [token {:keys [product-id detail-id body]}]
  (http/patch' {:url (str imweb-api-url "/shop/products/" product-id "/options-details/" detail-id)
                :headers {:content-type "application/json"
                          :access-token token}
                :body body}))

(defn ->products-options-details-record [product-id data]
  {:product_id         product-id
   :no                 (get data :no)
   :is_require         (if (get data :is_require) 1 0)
   :price              (get data :price)
   :stock_sku          (get data :stock_sku)
   :status             (get data :status)
   :option_code_values (json/write-str (get data :value_code_list))})

(defn get-products-options-details [token product-id]
  (let [products-options-details (fetch-products-options-details token product-id)
        _ (Thread/sleep 250)]
    (map #(->products-options-details-record product-id %) products-options-details)))

(defn- not-skued? [detail]
  (and (= (:status detail) "SOLDOUT")
       (str/blank? (:stock_sku detail))))

(defn ->skued-option-details! [token init-sku-no details]
  (let [{not-skued-details true skued-details false} (group-by not-skued? details)
        _ (println "[신규 옵션] count:" (count not-skued-details) not-skued-details)
        new-skued-details (map-indexed #(merge %2 {:status    "SALE"
                                                   :stock_sku (str (+ init-sku-no %1))}) not-skued-details)]
    (doseq [{:keys [product_id no status stock_sku]} new-skued-details]
      (patch-products-options-details! token {:product-id product_id
                                              :detail-id no
                                              :body {:status status
                                                     :stock_sku stock_sku}})
      (Thread/sleep 300))
    (concat new-skued-details skued-details)))

(comment
  (def token (:access_token (fetch-token)))
  (let [users (future (fetch-users token))
        orders (future (fetch-orders token))
        prod-orders (future (fetch-prod-orders token ["2021080982847"]))
        products (future (fetch-products token))
        products-options-1 (future (fetch-products-options token 623))
        products-options-2 (future (fetch-products-options token 601))
        products-options-details-1 (future (fetch-products-options-details token 623))
        products-options-details-2 (future (fetch-products-options-details token 601))]
    [@users @orders @products]
    [@products-options-1 @products-options-2 @products-options-details-1 @products-options-details-2 @prod-orders])

  (let [token (:access_token (fetch-token))
        product-ids [6 7 15]
        init-sku-no 7
        pods (->> (map #(get-products-options-details token %) product-ids)
                  (apply concat))
        skued-pods (->skued-option-details! token init-sku-no pods)]
    skued-pods))
