(ns advanced.mapv)

;; 순서대로임.
(mapv (fn [v]
        (Thread/sleep (* v 1000))
        v) [3 2 1])

(defn up [{:keys [a]}]
  (if (odd? a)
    {:ETag a}
    {}))

(def files [{:a 1}
            {:a 2}
            {:a 3}])

(->> (mapv (fn [file]
             (let [result (up file)]
               (when (result :ETag)
                 file))) files)
     (remove nil?))

;; doseq
(doseq [file files]
  (let [result (up file)]
    (when (result :ETag)
      file)))

