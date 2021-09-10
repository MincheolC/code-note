(ns basic.groupby
  (:require [medley.core :as medley]))

(def data [{:state "품절 예고"
            :product-name "[감카롱] 곶감선물세트"
            :product-sku "10001490"
            :created-at "2021-08-30"}
           {:state "품절 예고"
            :product-name "[감카롱] 곶감선물세트"
            :product-sku "10001491"
            :created-at "2021-08-30"}
           {:state "품절 예고"
            :product-name "[감카롱] 곶감선물세트"
            :product-sku "10001492"
            :created-at "2021-08-30"}
           {:state "품절 예고"
            :product-name "한울농업회사법인(박수영)"
            :product-sku "10001493"
            :created-at "2021-08-30"}
           {:state "품절 예고"
            :product-name "한울농업회사법인(박수영)"
            :product-sku "10001495"
            :created-at "2021-08-30"}
           {:state "품절 예고"
            :product-name "[감카롱] 곶감선물세트"
            :product-sku "10001491"
            :created-at "2021-08-31"}
           {:state "품절 예고"
            :product-name "[감카롱] 곶감선물세트"
            :product-sku "10001492"
            :created-at "2021-08-31"}])

(group-by #(select-keys % [:created-at :product-name]) data)

(merge-with conj {:a []} {:a 1} {:a 2} {:a 3})
(map (fn [[k v]]
        (assoc k :b v)) {{:a 2} 1})

(def grouped-data [{:state "품절 예고", :product-name "[감카롱] 곶감선물세트", :product-sku "10001490", :created-at "2021-08-30"}
                   {:state "품절 예고", :product-name "[감카롱] 곶감선물세트", :product-sku "10001491", :created-at "2021-08-30"}
                   {:state "품절 예고", :product-name "[감카롱] 곶감선물세트", :product-sku "10001492", :created-at "2021-08-30"}])

(let [merged-data (apply merge-with (comp flatten vector) grouped-data)]
  (zipmap (keys merged-data) (->> (vals merged-data)
                                  (map distinct))))


(apply merge-with (comp set) grouped-data)

(merge-with {:a 1} {:a 2} {:a 3})

(map :product-sku grouped-data)

(medley/map-kv #(fn [k v z] (prn k v z)) [{:a 1 :b 2}])


;; 아임웹 당기기
;; 
(assoc {:a 2} :b 2)