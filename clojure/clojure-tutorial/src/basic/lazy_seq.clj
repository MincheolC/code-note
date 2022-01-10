(ns basic.lazy-seq)

(defn how-lazy-seq-work
  "수평이 아니라 수직으로 동작하는 느낌
   
   filter called 0
   map called  0

   filter called 1  <-- 다시 처음으로
   
   filter called 2
   map called  2
   
   filter called 3  <-- 다시 처음으로
   
   filter called 4
   map called  4"
  []
  (->> (range)
       (filter (fn [v]
                 (prn "filter called" v)
                 (even? v)))
       (map (fn [v]
              (prn "map called " v)
              v))
       (take 3)))

