(ns csv.csv
  (:require [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.data :refer [diff]]
            [clojure.set :refer [difference]]))

(comment
  (with-open [writer (io/writer "src/csv/out-file.csv")]
    (csv/write-csv writer
                   [["a" "b" "c"]
                    ["1" "" "3"]
                    ["2" nil "3"]])))

(def origin (with-open [reader (io/reader "src/csv/origin.csv")]
              (doall
               (csv/read-csv reader))))

(def new (with-open [reader (io/reader "src/csv/new.csv")]
              (doall
               (csv/read-csv reader))))
(def columns (map keyword (first origin)))

(defn row->map [row]
  (zipmap columns row))

(def origin-data (map row->map (rest origin)))
(def new-data (map row->map (rest new)))

(defn find-differences []
  (let [origin-pcc (->> origin-data
                        (group-by :productCategoryCodeId)
                        keys
                        set)
        new-pcc (->> new-data
                     (group-by :productCategoryCodeId)
                     keys
                     set)]
    (difference origin-pcc new-pcc)
    ;; (difference new-pcc origin-pcc)
    ))

(count (find-differences))

;; 기존 90개 품종이 없음.
;; 기존 품종 개수는 550개, 새로 쿼리 품종 개수는 1029개 (460개 포함)