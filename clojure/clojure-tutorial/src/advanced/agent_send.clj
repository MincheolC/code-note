(ns advanced.agent-send)

;; 비동기 변경을 관리
(def magent (agent :a))

(defn change [state]
  (case state
    :a :b
    :b :c
    :d))

(send magent change)

@magent

;; I/O 대기 작업
(send-off magent change)

@magent

;; error
;; error는 캐시에 저장되고 다음 send동작이 처리 될 때 에러 발생함.
;; restart-agent로 다시 시작 전까지 error 상태 유지
(defn change-error [state]
  (throw (Exception. "Boom!")))

(send magent change-error)

@magent

(agent-errors magent)
(restart-agent magent :a)

;; 최초 agent 생성 시 세팅해줘야함.
(set-error-mode! magent :continue)
(defn err-handler [a ex]
  (prn "error " ex " value is " @a))
(set-error-handler! magent err-handler)

