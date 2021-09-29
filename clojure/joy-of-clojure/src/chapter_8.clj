(ns chapter-8)

;;; https://eunmin.gitbooks.io/clojure-for-beginners/content/9_macros.html

;; 함수랑 가장 다른 점은 매크로에 넘기는 파라미터가 평가되지 않음.
(defmacro unless [test then else]
  (if test
    else
    then))

(defn true-clause []
  (println "true-clause")
  (+ 1 2))

(defn false-clause []
  (println "false-clause")
  (+ 3 4))

;; 리스트에 담으면 macro의 결과가 코드 형태다.
(defmacro code-greeting [u]
  (list str "Hi, " u))

;; '을 붙여 str 평가되지 않도록 할 수 있음.
(defmacro code-greeting-2 [u]
  '(str "Hi, " u)) ; = (list 'str "Hi, " u)

;; `(syntax-quote)을 붙여 str 평가되지 않도록 할 수 있으며, ns를 붙여줌
;; ~표시를 붙이면 평가되어 값으로 바뀜
(defmacro code-greeting-3 [u]
  `(str "Hi, " ~u))

;; 매크로 안에 심볼을 만들어 써야하는 경우 심볼# 이라는 구문을 쓰면 겹치지 않는 심볼을 만들 수 있음.
(defmacro code-local-bind-add []
  `(let [a# 1 b# 2] (+ a# b#)))

;; 시퀀스 (args) ~@로 풀기
(defmacro code-good-add [& args]
  `(+ ~@args))

(comment
  (unless true (true-clause) (false-clause))
  (macroexpand-1 '(code-greeting "charles"))
  (macroexpand-1 '(code-greeting-2 "charles"))
  (macroexpand-1 '(code-greeting-3 "charles"))
  (code-greeting "charles")
  (code-greeting-2 "charles") ; u 값이 평가 되지 않고 심볼 그대로 출력되어 에러 발생.
  (code-greeting-3 "charles")
  (macroexpand-1 '(code-local-bind-add))
  (macroexpand-1 '(code-good-add 1 2 3))
  )
