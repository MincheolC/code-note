(ns advanced.spec
  (:require [clojure.spec.alpha :as spec]
            [clojure.spec.gen.alpha :as gen]
            [clojure.spec.test.alpha :as stest]
            [clojure.repl :as r]))

;; Conform / valid?
(= (spec/conform even? 1000)        1000)
(= (spec/conform odd? 1000)         :clojure.spec.alpha/invalid)
(= (spec/valid? even? 1000)         true)
(= (spec/valid? odd? 1000)          false)
(= (spec/valid? #{"a" "b" "c"} "c") true)

;; Registery / Doc
(spec/def ::date-str (fn [v]
                       (when (string? v)
                         (some? (re-matches #"^[0-9]{8}$" v)))))
(spec/def ::farm-product-id (fn [v]
                              (when (string? v)
                                (some? (re-matches #"^FM_[0-9A-Z]{6}$" v)))))
(spec/def ::grain-product-id #{"RC_grain_쌀", "RC_grain_고구마", "RC_grain_감자"})
(spec/def ::product-ids (spec/coll-of 
                         (spec/or :farm-product-id? ::farm-product-id
                                  :grain-product-id? ::grain-product-id)))
(spec/def ::lambda-input (spec/keys :req [::date-str ::product-ids]))

;;; date-str
(= (spec/valid? ::date-str "012345") false)
(= (spec/valid? ::date-str "ABCDEF") false)
(= (spec/valid? ::date-str "ABCDEFEF") false)
(= (spec/valid? ::date-str "20210624") true)

;;; farm-prodcut-id
(= (spec/valid? ::farm-product-id "012345") true)
(= (spec/valid? ::farm-product-id "ABCDEF") true)
(= (spec/valid? ::farm-product-id "0123456") false)
(= (spec/valid? ::farm-product-id "0123456") false)

;;; Generator (test/check 의존성 필요)
(gen/generate (spec/gen ::grain-product-id))

;;; grain-product-id
(= (spec/valid? ::grain-product-id "쌀")      true)
(= (spec/valid? ::grain-product-id "고구마")   true)
(= (spec/valid? ::grain-product-id "고구마 ")  false)

;;; product-id
(= (spec/valid? ::product-ids ["쌀"])      true)
(= (spec/valid? ::product-ids ["고구마"])   true)
(= (spec/valid? ::product-ids ["고구마 "])  false)
(= (spec/valid? ::product-ids ["012345"])  true)
(= (spec/valid? ::product-ids ["0123456"]) false)

;;; lambda-input
(= (spec/valid? ::lambda-input {::date-str "20210614"
                                ::product-ids ["RC_grain_쌀 "]})    false)
(= (spec/valid? ::lambda-input {::date-str "20210614"
                                ::product-ids ["RC_grain_쌀"]})     true)

(defn test-product-ids [product-id]
  {:pre [(spec/valid? ::product-ids [product-id])]}
  product-id)

(defn test-lambda-input [{:as arguments :keys [date-str product-ids]}]
  {:pre [(spec/valid? ::lambda-input {::date-str date-str
                                      ::product-ids product-ids})]}
  arguments)

