(ns chapter-5)

(vec (range 10))

(vector [1 2] [2 3])       ;; vector
(map vector [1 2] [2 3])   ;; sequence

(into [:a :b] (range 5))   ;; vector
(concat [:a :b] (range 5)) ;; sequence

(into (vector-of :int) [Math/PI 2 1.3]) ;; vector
(map int [Math/PI 2 1.3])               ;; sequence


;; 5.1.
(defn neighbors
  ([size yx] (neighbors [[-1 0] [1 0] [0 -1] [0 1]]
                        size
                        yx))
  ([deltas size yx]
   (filter (fn [new-yx]
             (every? #(< -1 % size) new-yx))
           (map #(vec (map + yx %))
                deltas))))

(neighbors 5 [0 1])

;; reverse
(defn reverse' [f coll]
  (reduce #(conj %1 (f %2)) () coll))

(reverse' - [1 2 3])

;; Map
(first {:c 1 :b 2 :a 3})

(pop [1 2 3])

;; cons를 사용하면 붙이기 전 데이터가 vector였는지 list였는지 알 수 없음
(cons 1 [2 3])

(conj [2 3] 1)
(conj '(2 3) 1)

;; queue
(def fifo-q (conj clojure.lang.PersistentQueue/EMPTY :a :b :c))
(peek fifo-q)
(conj fifo-q :d)
(pop fifo-q)

;; contain / contains? = key가 존재하는 경우
(some #{:a} [:b :c :d :a]) ;; :a
(contains? [1 2 3 4] 4)    ;; false

(class (seq [1 2 3]))

(concat [1 2] [2 3])


(map inc nil)

(def xform (comp (map #(+ 2 %))
                 (filter odd?)))

; adds 2, then omits if result is even.
(into [] xform (range 10))
