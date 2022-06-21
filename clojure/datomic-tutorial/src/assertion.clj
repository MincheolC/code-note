(ns assertion
  "Assertion - 엔티티, 속성, 값 및 tx를 연결하는 데이터베이스의 원자적 사실입니다. (철회의 반대)"
  (:require [database :as ds]))

;; Datom - 엔티티/속성/값/트랜잭션/추가로 구성된 데이터베이스의 원자적 사실
;; - entitiy id
;; - attribute
;; - value for the attribute
;; - transaction id
;; - boolean indicating whether added or retracted
;; ex) [83562883711053 10 :small 13194139533319 true]


;; ## List / Map Form
(comment
  [:db/add "foo" :db/ident :green]
  {:db/ident :green} ; map은 assertion의 집합을 의미함.
  )

;; :db/ident 속성은 엔티티의 고유한 이름을 지정
;; :db/cardinality 1:1 or 1:n 관계 설정
;; :db/doc 커멘트 같은 역할
(def inventory-schema
  [{:db/ident :inv/sku
    :db/valueType :db.type/string
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/color
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/size
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/type
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}])

(comment
  (ds/insert! inventory-schema))

(defn make-idents
  "transaction-ready maps을 만든다"
  [coll]
  (mapv ds/->ident coll))

(def colors [:red :green :blue :yellow])
(def sizes [:small :medium :large :xlarge])
(def types [:shirt :pants :dress :hat])

(defn create-sample-data
  "Create a vector of maps of all permutations of args"
  [colors sizes types]
  (->> (for [color colors size sizes type types]
         {:inv/color color
          :inv/size size
          :inv/type type})
       (map-indexed
         (fn [idx map]
           (assoc map :inv/sku (str "SKU-" idx))))
       vec))

(comment
  (ds/insert! (make-idents sizes))
  (ds/insert! (make-idents colors))
  (ds/insert! (make-idents types))
  @(def sample-data (create-sample-data colors sizes types))
  @(def sample-data-transaction (ds/insert! sample-data)))
