(ns products.farm
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [java-time.format :as tf]
            [java-time :as t]
            [util :refer [now-ldt]]))

(def ^:dynamic *api-key* "Xb+dJxZBlEVp7V9m2w5Q6yMbGZm/AZo8beCUu4JOskz3epf2mf/7OF4SKSH74xY4xgvAoF/QvpBcnvR87Z7IgA==")
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
               :specie-code specie-code
               :total      nil
               :coll       []}]
    (->> (fetch-next-page-of-market-price state)
         (iterate fetch-next-page-of-market-price)
         (drop-while #(< (count (:coll %))
                         (:total %)))
         first
         :coll)))

(defn fetch-specie-codes []
  ["061401" "020199" "030101" "030107"])

(defn run []
  (let [specie-codes (fetch-specie-codes)
        yesterday (tf/format "yyyyMMdd" (-> (now-ldt "Asia/Seoul")
                                            (t/minus (t/days 1))))]
    (pmap #(fetch-market-price yesterday % (subs % 0 4)) specie-codes)))

(comment
  (fetch-market-price "20210710" "061401" "0614")
  (run)
  )

(select-keys {:coll 1 :a 2} [:coll :a])

(def columns-txt
  "product_category_code_id
  delngDe
  sbidTime
  aucSeCode
  aucSeNm
  whsalMrktNewCode
  whsalMrktNewNm
  whsalMrktCode
  whsalMrktNm
  cprInsttNewCode
  insttNewNm
  cprInsttCode
  insttNm
  ledgNo
  sleSeqn
  catgoryNewCode
  catgoryNewNm
  catgoryCode
  catgoryNm
  stdPrdlstNewCode
  stdPrdlstNewNm
  stdPrdlstCode
  stdPrdlstNm
  stdSpciesNewCode
  delngPrut
  stdSpciesNewNm
  stdSpciesCode
  stdSpciesNm
  stdUnitNewCode
  stdUnitNewNm
  stdFrmlcNewCode
  stdFrmlcNewNm
  stdMgNewCode
  stdMgNewNm
  stdQlityNewCode
  stdQlityNewNm
  cprUsePrdlstCode
  cprUsePrdlstNm
  sbidPric
  shipmntSeCode
  shipmntSeNm
  stdMtcNewCode
  stdMtcNewNm
  cprMtcCode
  cprMtcNm
  delngQy")

(def origin-columns (clojure.string/split columns-txt #"\s+"))

(def origin-headers (map keyword origin-columns))

(def origin-weights (zipmap origin-headers (iterate inc 1)))

(defn origin-comparator [a b]
  (compare (get origin-weights a)
           (get origin-weights b)))

(defn fill-columns [m]
  {:product_category_code_id (get m :product_category_code_id "")
   :delngDe                  (get m :delngDe "")
   :sbidTime                 (get m :sbidTime "")
   :aucSeCode                (get m :aucSeCode "")
   :aucSeNm                  (get m :aucSeNm "")
   :whsalMrktNewCode         (get m :whsalMrktNewCode "")
   :whsalMrktNewNm           (get m :whsalMrktNewNm "")
   :whsalMrktCode            (get m :whsalMrktCode "")
   :whsalMrktNm              (get m :whsalMrktNm "")
   :cprInsttNewCode          (get m :cprInsttNewCode "")
   :insttNewNm               (get m :insttNewNm "")
   :cprInsttCode             (get m :cprInsttCode "")
   :insttNm                  (get m :insttNm "")
   :ledgNo                   (get m :ledgNo "")
   :sleSeqn                  (get m :sleSeqn "")
   :catgoryNewCode           (get m :categoryNewCode "")
   :catgoryNewNm             (get m :categoryNewNm "")
   :catgoryCode              (get m :categoryCode "")
   :catgoryNm                (get m :categoryNm "")
   :stdPrdlstNewCode         (get m :stdPrdlstNewCode "")
   :stdPrdlstNewNm           (get m :stdPrdlstNewNm "")
   :stdPrdlstCode            (get m :stdPrdlstCode "")
   :stdPrdlstNm              (get m :stdPrdlstNm "")
   :stdSpciesNewCode         (get m :stdSpciesNewCode "")
   :delngPrut                (get m :delngPrut "")
   :stdSpciesNewNm           (get m :stdSpciesNewNm "")
   :stdSpciesCode            (get m :stdSpciesCode "")
   :stdSpciesNm              (get m :stdSpciesNm "")
   :stdUnitNewCode           (get m :stdUnitNewCode "")
   :stdUnitNewNm             (get m :stdUnitNewNm "")
   :stdFrmlcNewCode          (get m :stdFrmlcNewCode "")
   :stdFrmlcNewNm            (get m :stdFrmlcNewNm "")
   :stdMgNewCode             (get m :stdMgNewCode "")
   :stdMgNewNm               (get m :stdMgNewNm "")
   :stdQlityNewCode          (get m :stdQlityNewCode "")
   :stdQlityNewNm            (get m :stdQlityNewNm "")
   :cprUsePrdlstCode         (get m :cprUsePrdlstCode "")
   :cprUsePrdlstNm           (get m :cprUsePrdlstNm "")
   :sbidPric                 (get m :sbidPric "")
   :shipmntSeCode            (get m :shipmntSeCode "")
   :shipmntSeNm              (get m :shipmntSeNm "")
   :stdMtcNewCode            (get m :stdMtcNewCode "")
   :stdMtcNewNm              (get m :stdMtcNewNm "")
   :cprMtcCode               (get m :cprMtcCode "")
   :cprMtcNm                 (get m :cprMtcNm "")
   :delngQy                  (get m :delngQy "")})

