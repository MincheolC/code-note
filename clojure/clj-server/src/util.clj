(ns util)

(defn- convert [context descriptor]
  (reduce (fn [result [magnitude unit]]
            (+ result
               (let [val (get context unit)]
                 (if (vector? val)
                   (* magnitude (convert context val))
                   (* magnitude val)))))
          0
          (partition 2 descriptor)))

(def distance-reader
  (partial convert {:m 1
                    :km 1000
                    :cm 1/100
                    :mm [1/10 :cm]}))

(def time-reader
  (partial convert {:sec 1
                    :min 60
                    :hr [60 :min]
                    :day [24 :hr]}))