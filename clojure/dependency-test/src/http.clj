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

;; SELECT code1 FROM product_category_code
;; WHERE product_category_code. `type `= "farm" AND product_category_code.is_searchable = 1;
;; 1029
;; (def species-codes ["061401" "020199" "030101"])
;; (def species-codes ["061401" "020199" "030101" "030107"])

(def ^:dynamic *api-key* (-> "config.edn" io/resource slurp edn/read-string :data-go :service-key))
(def api-url-base "http://apis.data.go.kr/B552895/openapi/service/OrgPriceAuctionService/getRealProdPriceList")

;; (defn get-real-prod-price-list [code]
;;   (let [yesterday (t/minus (now-ldt "Asia/Seoul") (t/days 1))
;;         url "http://apis.data.go.kr/B552895/openapi/service/OrgPriceAuctionService/getRealProdPriceList"
;;         service-key (-> "config.edn" io/resource slurp edn/read-string :data-go :service-key)
;;         page-no 1
;;         num-of-rows 100]
;;     (client/get url {:accept :json
;;                      :query-params {"ServiceKey" service-key
;;                                     "pageNo" page-no
;;                                     "numOfRows" num-of-rows
;;                                     "delngDe" (tf/format "yyyyMMdd" yesterday)
;;                                     "prdlstCd" (subs code 0 4)
;;                                     "spciesCd" code}})))


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

(defn ->rows [code market-prices]
  (let [product-category-code-id (str "FM_" code)]
    (map #(assoc % :product_category_code_id product-category-code-id) market-prices)))

(defn ->csv [name columns rows]
  (with-open [writer (io/writer (str name ".csv"))]
    (csv/write-csv writer (concat columns rows))))

;; 결과가 nil 인경우
;; (let [species-codes ["061401" "020199" "030101" "030107"]
;;       market-prices-map (->> (pmap #(get-real-prod-price-list %) species-codes)
;;                              (map #(json/read-str (:body %) :key-fn keyword))
;;                              (map #(-> % :response :body :items :item))
;;                              (zipmap species-codes))
;;       columns (-> market-prices-map first second keys)
;;       rows-per-codes (map-kv #(->rows %1 %2) market-prices-map)]
;;   rows-per-codes)

;; 상태 
()


(take-while #(< % 10) (iterate inc 0))


;; (with-open [writer (io/writer "out-file.csv")]
;;   (csv/write-csv writer
;;                  [["abc" "def"]
;;                   ["ghi" "jkl"]]))

