(ns advanced.juxt)

(defn juxt' [n]
  (let [inc-nums (iterate inc 0)]
    (->> (take n inc-nums)
         ((juxt first last)))))

;; split-by~ 
(def split-by (juxt filter remove))
(split-by pos? [-1 -2 4 5 3 -9])

