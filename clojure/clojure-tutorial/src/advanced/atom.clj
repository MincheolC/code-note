(ns advanced.atom)

(def state (atom {}))

(add-watch state :watcher
           (fn [key atom old-state new-state]
             (prn "-- Atom Changed --")
             (prn "key" key)
             (prn "atom" atom)
             (prn "old-state" old-state)
             (prn "new-state" new-state)))

(swap! state assoc 1 2)

(let [_ 2]
  (future (dotimes [n 2] (swap! state assoc n n)))
  (future (dotimes [n 2] (swap! state assoc (+ n 3) n))))

@state

