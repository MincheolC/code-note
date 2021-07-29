(ns products.farm-old
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

(defn get-real-prod-price-list [code]
  (let [yesterday (t/minus (now-ldt "Asia/Seoul") (t/days 1))
        url "http://apis.data.go.kr/B552895/openapi/service/OrgPriceAuctionService/getRealProdPriceList"
        service-key (-> "config.edn" io/resource slurp edn/read-string :data-go :service-key)
        page-no 1
        num-of-rows 100]
    (client/get url {:accept :json
                     :query-params {"ServiceKey" service-key
                                    "pageNo" page-no
                                    "numOfRows" num-of-rows
                                    "delngDe" (tf/format "yyyyMMdd" yesterday)
                                    "prdlstCd" (subs code 0 4)
                                    "spciesCd" code}})))


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


(def species-codes ["061401" "020199" "030101" "030107"])
(time (and (into [] (pmap #(get-real-prod-price-list %) species-codes)) nil))
(time (and (into [] (map #(get-real-prod-price-list %) species-codes)) nil))
(time (and (into [] (mapv #(get-real-prod-price-list %) species-codes)) nil))

(time (range 10))