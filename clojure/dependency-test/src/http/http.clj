(ns http
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.data.csv :as csv]
            [java-time.format :as tf]
            [java-time :as t]
            [util :refer [now-ldt]]
            [medley.core :refer [map-kv]]))

(set! *print-length* 2)

(def ^:dynamic *api-key* (-> "config.edn" io/resource slurp edn/read-string :data-go :service-key))
(def api-url-base "http://apis.data.go.kr/B552895/openapi/service/OrgPriceAuctionService/getRealProdPriceList")


(defn request-market-price [{:keys [date specie-code product-code items-per-page page]}]
  (let [query-params {"ServiceKey" *api-key*
                      "delngDe"    date
                      "spciesCd"   specie-code
                      "prdlstCd"   product-code
                      "numOfRows"  items-per-page
                      "pageNo"     page}]
    (client/get api-url-base {:query-params query-params
                              :accept       :json})))

(defn fetch-next-page-of-market-price [state]
  (let [response (request-market-price (:query state))
        content (-> response :body (json/read-str :key-fn keyword) :response :body)
        total (-> content :totalCount)
        items (-> content :items :item)]
    (-> state
        (update-in [:query] update :page inc)
        (assoc :total total)
        (update :coll #(into % items)))))

(defn fetch-market-price [date specie-code product-code]
  (let [query {:date           date
               :specie-code    specie-code
               :product-code   product-code
               :items-per-page 20
               :page           1}
        state {:query query
               :total      nil
               :coll       []}]
    (->> (fetch-next-page-of-market-price state)
         (iterate fetch-next-page-of-market-price)
         (drop-while #(< (count (:coll %))
                         (:total %)))
         first
         :coll)))


(take-while #(< % 10) (iterate inc 0))
