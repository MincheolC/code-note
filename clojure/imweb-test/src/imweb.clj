(ns imweb
  (:require [config :refer [imweb-api-url imweb-api-key imweb-api-secret]]
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

(comment
  (def token (:access_token (fetch-token)))
  (let [users (future (fetch-users token))
        orders (future (fetch-orders token))
        products (future (fetch-products token))]
    [@users @orders @products]))
