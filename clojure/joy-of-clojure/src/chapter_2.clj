(ns chapter-2)

;; quote & unquote
(def age 14)

(quote age) 
(= (cons 2 (quote (2 3)))
   (cons 2 '(2 3)))

[1 (+ 2 3)]
'(1 (+ 2 3))
