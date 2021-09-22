(ns chapter-16
  (:require [clojure.walk :as walk]
            [clojure.core.logic :as logic]
            [clojure.core.logic.pldb :as pldb]
            [clojure.core.logic.fd :as fd]))

;; 데이터 단일화 (unification)
(defn lvar?
  "Logic variable 인지 판단"
  [x]
  (boolean
    (when [symbol? x]
      (re-matches #"^\?.*" (name x)))))

(defn satisfy1
  [l r knowledge]
  (let [L (get knowledge l l)
        R (get knowledge r r)]
    (cond
      (= L R) knowledge
      (lvar? L) (assoc knowledge L R)
      (lvar? R) (assoc knowledge R L)
      :default nil)))

;;; walk는 tree 탐색 라이브러리 (틀린 예제)
(defn subst [term binds]
  (walk/prewalk
    (fn [expr]
      (if (lvar? expr)
        (or (binds expr) expr)
        expr))
    term))

(comment
  (satisfy1 '?something 2 {})
  (lvar? '(1 ?x 3))

  (subst '(1 ?x 3) '{?x 2}))


;; core.logic
(pldb/db-rel orbits orbital body)
(pldb/db-rel stars star)

(def facts
  (pldb/db
    [orbits :mercury :sun]
    [orbits :venus :sun]
    [orbits :earth :sun]
    [stars :sun]))

(defn planeto [body]
  (logic/fresh [star]
    (stars star)
    (orbits body star)))

(comment
  (logic/run* [answer]
    (logic/== answer 5))

  (logic/run* [val1 val2]
    (logic/== {:a val1, :b 2}
              {:a 1, :b val2}))

  (logic/run* [george]
    (logic/conde
      [(logic/== george :born)]
      [(logic/== george :unborn)]))

  (pldb/with-db facts
    (logic/run* [q]
      (logic/fresh [orbital body]
        (orbits orbital body)
        (logic/== q orbital))))

  (pldb/with-db facts
    (logic/run* [q]
      (planeto :earth)))

  (pldb/with-db facts
    (logic/run* [q]
      (planeto :earth)
      (logic/== q true))))

;; sudoku
(def b1 '[3 - - - - 5 - 1 -
          - 7 - - - 6 - 3 -
          1 - - - 9 - - - -
          7 - 8 - - - - 9 -
          9 - - 4 - 8 - - 2
          - 6 - - - - 5 - 1
          - - - - 4 - - - 6
          - 4 - 7 - - - 2 -
          - 2 - 6 - - - - 3])

(defn rowify [board]
  (->> board
       (partition 9)
       (map vec)
       vec))

(defn colify [rows]
  (apply map vector rows))

(defn subgrid [rows]
  (partition 9
             (for [row (range 0 9 3)
                   col (range 0 9 3)
                   x (range row (+ row 3))
                   y (range col (+ col 3))]
               (get-in rows [x y]))))

(def logic-board #(repeatedly 81 logic/lvar))
(defn init [[lv & lvs] [cell & cells]]
  (if lv
    (logic/fresh []
      (if (= '- cell)
        logic/succeed
        (logic/== lv cell))
      (init lvs cells))
    logic/succeed))

(defn solve-logically [board]
  (let [legal-nums (fd/interval 1 9)
        lvars (logic-board)
        rows (rowify lvars)
        cols (colify rows)
        grids (subgrid rows)]
    (logic/run 1 [q]
      (logic/everyg #(fd/in % legal-nums) lvars)
      (logic/everyg fd/distinct rows)
      (logic/everyg fd/distinct cols)
      (logic/everyg fd/distinct grids)
      (logic/== q lvars))))

(defn prep [board]
  (map #(partition 3 %) (partition 9 board)))

(defn print-board [board]
  (let [row-sep (apply str (repeat 37 "-"))]
    (println row-sep)
    (dotimes [row (count board)]
      (print "| ")
      (doseq [subrow (nth board row)]
        (doseq [cell (butlast subrow)]
          (print (str cell "   ")))
        (print (str (last subrow) " | ")))
      (println)
      (when (zero? (mod (inc row) 3))
        (println row-sep)))))

(comment
  (def answer (-> b1
                  solve-logically
                  first))
  (-> answer
      prep
      print-board))

