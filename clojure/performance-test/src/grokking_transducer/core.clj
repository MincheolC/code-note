;; https://dev.solita.fi/2021/10/14/grokking-clojure-transducers.html
(ns grokking-transducer.core)

; reducing function이란 reduce의 첫 번째 인자로 쓸 수 있는 함수를 말합니다.
; reductin function은 누적된 결과와 인풋을 받아 새로운 결과를 리턴합니다.
; i.e. conj
(comment
  (reduce conj #{} [1 2 2 3 1])
  ,)

; transducer는 reducing function을 더 멋진 reducing function으로 바꾸는 기능입니다.
(defn inc-transducer
  "Given a reducing function rf, return a new reducing function that increments
  every input it receives, then calls rf with the result and the incremented
  input."
  ;; rf stands for "reducing function"
  [rf]
  ;; this here's a new reducing function
  (fn [result input]
    ;; here we call the original reducing function
    (rf result (inc input))))

(def inc-then-conj (inc-transducer conj))

(comment
  (conj [1 2] 3)
  (inc-then-conj [1 2] 3)
  (reduce inc-then-conj [] [1 2 3 4 5])
  ,)


; 만약 숫자를 늘리는 것 외에 다른 작업을 하고 싶으면 어떻게 해야할까?
; inc를 인풋에 적용하는 함수 대신, 아무 함수를 받아 인풋에 적용하는 새로운 함수를 만들어보자.
; mapping은 변환기는 아니며, 함수를 받아 변환기를 반환하는 함수다.
(defn mapping
  "Given function f, return a transducer that calls f on every input it
  receives."
  [f]
  (fn [rf]
    (fn [result input]
      (rf result (f input)))))

(def inc-mapper
  "Given a reducing function rf, return a reducing function that increments its
  input before calling rf."
  (mapping inc))

(def inc-rf
  "A reducing function that increments its input, then adds it into the
  accumulated result."
  (inc-mapper conj))

(comment
  (reduce inc-rf [] [1 2 3 4 5])
  (map inc [1 2 3 4 5])
  ,)
; 읭? map을 재구현한게 아닌가???
; ㅎㅎ 실제로 그렇게 보일 수 있지만 중요한 차이점이 있음여~


; What's so special about transducers~?
; 1. map의 마지막은 늘 conj다. transducer는 어떤 rf를 쓸지 우리가 결정할 수 있다.
; 2. transducer는 최종값을 만드는 방법은 신경쓰지 않는다. map은 숫자 증가시킨 다음 새 목록의 추가를 의미.
;   -> 입출력과 변환을 분리.
; 3. ->> 는 비용이 든다. 각 step 변환마다 중간 collection을 만들고 바로 폐기.
(->>
  [1 2 3 4 5]
  (filter even?) ;; intermediate collection (2 4), discarded immediately
  (map inc)      ;; final result (3 5)
  )

; transducer를 사용하면 중간 collection 없이 동일한 변환을 수행할 수 있음.
; mapping과 같은 filtering을 만들어보자.
(defn filtering
  "Given a predicate function pred, return a transducer that only retains items
  for which pred returns true."
  [pred]
  (fn [rf]
    (fn [result input]
      (if (pred input)
        (rf result input)
        result))))

; transducer를 조합하여 다단계 변환을 만들 수 있다.
; 입력이 작을 때는 체감할 수 있는 성능 차이는 없지만, 입력이 더 크고 변환 단계가 많을 수록 성능이 더 크게 향상됨.
(def rf
  "A reducing function that filters even numbers, increments every remaining
  number, then conjoins them into the result."
  ((comp (filtering even?) (mapping inc)) conj))

(comment
  (reduce rf [] [1 2 3 4 5]))
