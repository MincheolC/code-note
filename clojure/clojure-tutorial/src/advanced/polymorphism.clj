(ns advanced.polymorphism
  (:import java.lang.Long))

;; 다형성
;;; 1개의 메소드에 대한 다형성 (defmulti + defmethods)
(defmulti plus1 class)
(defmethod plus1 Long [input]
  (+ input 1))
(defmethod plus1 String [input]
  (+ (Integer/parseInt input) 1))
(defmethod plus1 :default [input]
  (str "wrong input: " input))

(defmulti plus2 (fn [x] (condp apply [x]
                          number? "number"
                          string? "string")))
(defmethod plus2 "number" [input]
  (+ input 2))
(defmethod plus2 "string" [input]
  (+ (Integer/parseInt input) 2))

(comment
  (plus1 1)
  (plus1 "1")
  (plus1 :1)
  (plus2 1)
  (plus2 "2"))


;;; 여러 메소드에 대한 다형성 (defprotocol + extend-protocol)
(defprotocol Fly
  "A simple protocol for flying"
  (fly [this] [this a b] "Method to fly 2 arity"))

(extend-protocol Fly
  String
  (fly
    ([this] (str "it is " this))
    ([this a b] (str "it is " this a b)))

  Number
  (fly
    ([this] (+ this))
    ([this a b] (+ this a b))))

(comment
  (fly "1")
  (fly "1" 1 2)
  (fly 1)
  (fly 1 2 3))


;;; 새로운 자료구조 만들기 (defrecord)
(defrecord Bird [name color]
  Fly
  (fly [_] (str name " is flying"))
  (fly [_ _ _] (str color " " name " is flying")))

(comment
  (def pigeon (Bird. "gugu" "black"))
  pigeon
  (.-color pigeon)
  (fly pigeon 1 2)
  (fly pigeon))


;;; 익명의 타입을 정의하고 이 타입의 인스턴스 생성 (Reify)
(defprotocol Fruit
  (subtotal [item]))
(defprotocol Veges
  (subtotal2 [item])
  (subtotal3 [item]))
(defrecord Banana [qty])
(defrecord Grape  [qty])

(extend-type Banana
  Fruit
  (subtotal [item]
    (* 100 (:qty item))))

(extend-type Grape
  Fruit
  (subtotal [item]
    (* 50 (:qty item))))

(defn coupon [item]
  (reify
    Fruit
    #_(subtotal [_]
      (int (* 0.75 (subtotal item))))
    (subtotal [_]
      (int (* 0.75 item)))

    Veges
    (subtotal2 [_]
      (* 2 item))

    clojure.lang.IPersistentMap
    (assoc [_ k v]
      (assoc item k (str v)))))

(comment
  (map subtotal [(Banana. 10) (coupon (Grape. 20))])
  (subtotal (coupon 10))
  (subtotal2 (coupon 10))
  (subtotal3 (coupon 10))
  (assoc (coupon {}) :a 1))
