(ns core
  (:require [next.jdbc :as jdbc]))

(defprotocol Centroid
  (get-centroid [this])
  (set-centroid [this x y]))

;; 자료구조 만들기 1 (deftype)
(deftype Circle [radius ^{:volatile-mutable true} x ^{:volatile-mutable true} y]
  Centroid
  (get-centroid [this] [x y])
  (set-centroid [this x' y']
    (set! x x')
    (set! y y')))
(deftype Square [length width])

;; 1개의 메소드에 대한 다형성 (defmulti + defmethods)
;; (defmulti name dispatch-fn & options)
;; 인터페이스에 생성 x
(defmulti area class)
(defmethod area Circle [c]
  (* Math/PI (.radius c) (.radius c)))
(defmethod area Square [s]
  (* (.length s) (.width s)))
(defmethod area :default [_]
  0)

(comment
  (area (Square. 2 5))
  (area nil)

  (def circle (Circle. 10 0 0))
  (area circle)
  ;; 변경
  (get-centroid circle)
  (set-centroid circle 1 1))

;; 프로토콜 (인터페이스) 만들기
(defprotocol Sleep
  (sleep [this]))

(defprotocol Fly
  (fly [this] [this speed])) ;;

(defprotocol Run
  (run [this]))

(defprotocol BasicBehavior
  (growl [this])
  (bark [this]))

;; 자료구조 만들기 2 (defrecrod)
(defrecord Bird [name]
  Sleep
  (sleep [this] (str (:name this) "가 잔다"))

  Fly
  (fly [this] (str (:name this) "가 날다"))
  (fly [this speed] (format "%s가 %sm/s로 날다" (:name this) speed)))

(defrecord Dog [name]
  Sleep
  (sleep [this] (str (:name this) "가 잔다"))

  Run
  (run [this] (str (:name this) "가 달리다")))

;; 같은 프로토콜의 여러 구현을 한 번에 정의하기 (각 타입에 extend-type을 적용)
(extend-protocol BasicBehavior
  Bird
  (growl [this] "끼르륵")
  (bark [this] "까악")

  Dog
  (growl [this] "그르릉")
  (bark [this] "멍멍")

  Object
  (growl [this] "default")
  (bark [this] "default")

  nil
  (growl [this] "nil")
  (bark [this] "nil"))

(comment
  (def crow (->Bird "까마귀"))      ; 생성 1
  (def crow (Bird. "까마귀"))       ; 생성 2
  (def crow #core.Bird["까마귀"])   ; 생성 3
  (map->Bird {:name "닭" :age 1})  ; 생성 4 (확장)

  ;; 조회
  (.-name crow)
  (:name crow)
  (crow :name) ; map과 달리 함수로 동작 안함 X

  (sleep crow)
  (fly crow)
  (fly crow 2)
  (growl crow)
  (bark crow)

  (def maltese (->Dog "말티즈"))
  (sleep maltese)
  (run maltese)
  (growl maltese)
  (bark maltese)

  (growl {})
  (bark {})
  (growl nil)
  (bark nil)
  ;;
  )

;; Reify (로컬 컨텍스트 활용 + 1회성 구현)
(defn anonymous-type [name speed]
  (reify
    Fly
    (fly [this] (format "%s가 %sm/s로 날다" name speed)) ; 프로토콜에서 제공하는 함수를 모두 구현할 필요가 없음

    Run
    (run [this] (str name " 달리다"))))

(comment
  (def superman (anonymous-type "존" 10000))
  (fly superman)
  (run superman))

(comment
  (jdbc/execute! "db-connection-map" "sql" {}))
