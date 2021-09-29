(ns chapter-17)

;; 옵저버 패턴
(defmacro defformula [nm bindings & formula]
  `(let ~bindings
     (let [formula# (agent ~@formula)
           update-fn# (fn [key# ref# o# n#]
                        (send formula# (fn [_#] ~@formula)))]
       (doseq [r# ~(vec (map bindings
                             (range 0 (count bindings) 2)))]
         (add-watch r# :update-formula update-fn#))
       (def ~nm formula#))))

(comment
  (def h (ref 25))
  (def ab (ref 100))
  (macroexpand-1 '(defformula avg [at-bats ab, hits h]
                              (float (/ @hits @at-bats)))))

;; 동적 바인등을 활용한 동적 에외 처리
(defn ^:dynamic handle-weird-animal
  [{[name] :content}]
  (throw (Exception. (str name " must be 'deal with'"))))

(defmulti handle-weird (fn [{[name] :content}] name))
(defmethod handle-weird "dog" [_]
  (println "Dog"))
(defmethod handle-weird "cat" [_]
  (println "Cat"))

(comment
  (binding [handle-weird-animal handle-weird]
    (handle-weird-animal {:content ["cat"]})
    (handle-weird-animal {:content ["dog"]})))

;; 디버깅 (중단점 매크로)
(defn contextual-eval [ctx expr]
  (eval
    `(let [~@(mapcat (fn [[k v]] [k `'~v]) ctx)]
       ~expr)))

(defn readr [prompt exit-code]
  (let [input (clojure.main/repl-read prompt exit-code)]
    (if (= input ::tl)
      exit-code
      input)))

(defmacro local-context []
  (let [symbols (keys &env)]
    (zipmap (map (fn [sym] `(quote ~sym)) symbols)
            symbols)))

(defmacro break []
  `(clojure.main/repl
     :prompt #(print "debug=> ")
     :read readr
     :eval (partial contextual-eval (local-context))))

(defn div [n d]
  (break)
  (int (/ n  d)))

(comment
  (contextual-eval '{a 1 b 2} '(+ a b))
  (readr #(print "invisible => ") ::exit)
  (let [a 1, b 2, c 3]
    (let [b 200]
      (local-context)))
  (div 10 0))
