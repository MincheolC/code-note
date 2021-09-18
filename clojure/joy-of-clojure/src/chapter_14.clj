(ns chapter-14
  (:require [clojure.set :as sql]))


;; 7.1
(defn convert [context descriptor]
  (reduce (fn [result [magnitude unit]]
            (+ result
               (let [val (get context unit)]
                 (if (vector? val)
                   (* magnitude (convert context val))
                   (* magnitude val)))))
          0
          (partition 2 descriptor)))

(defn rand-vec [& generators]
  (into [] (map #(%) generators)))
(defn rand-map [size kgen vgen]
  (into {} (repeatedly size #(rand-vec kgen vgen))))

;;; Data-readers
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
;; 동적 data-reader
(binding [*data-readers* {'unit/time #'chapter-14/time-reader}]
  (read-string "#unit/time [1 :min 30 :sec]"))

;;; 이벤트 소스 모델
(defn valid? [event]
  (boolean (:result event)))

(defn effect [{:keys [at-bats hits] :or {at-bats 0 hits 0}} event]
  (let [at-bats (inc at-bats)
        hits (if (= :hit (:result event))
               (inc hits)
               hits)
        avg (double (/ hits at-bats))]
    {:at-bats at-bats :hits hits :avg avg}))

(defn apply-effect [state event]
  (if (valid? event)
    (effect state event)
    state))

(def effect-all #(reduce apply-effect %1 %2))
(def events (repeatedly 100 (fn []
                              (rand-map 1
                                        #(-> :result)
                                        #(if (< (rand-int 10) 3)
                                           :hit
                                           :out)))))
(def fx-timeline #(reductions apply-effect %1 %2))

(comment
  (effect-all {} events)
  (fx-timeline {} (take 10 events)))

;;; 시뮬레이션
(def PLAYERS #{{:player "A" :ability 32/100}
               {:player "B" :ability 26/100}
               {:player "C" :ability 19/100}})

(defn lookup [db name]
  (first (sql/select #(= name (:player %)) db)))

(defn update-stats [db event]
  (let [player (lookup db (:player event))
        less-db (sql/difference db #{player})]
    (conj less-db
          (merge player (effect player event)))))

(defn commit-event [db event]
  (dosync (alter db update-stats event)))

(defn rand-event [{ability :ability}]
  (let [able (numerator ability)
        max (denominator ability)]
    (rand-map 1
              #(-> :result)
              #(if (< (rand-int max) able)
                 :hit
                 :out))))

(defn rand-events [total player]
  (take total
        (repeatedly #(assoc (rand-event player)
                            :player
                            (:player player)))))

(def agent-for-player
  (memoize (fn [player-name]
             (let [a (agent [])]
               (set-error-handler! a #(println "ERROR: " %1 %2))
               (set-error-mode! a :fail)
               a))))

(defn feed [db event]
  (let [a (agent-for-player (:player event))]
    (send a (fn [state]
              (commit-event db event)
              (conj state event)))))

(defn feed-all [db events]
  (doseq [event events]
    (feed db event))
  db)

(defn simulate [total players]
  (let [events (apply interleave
                      (for [player players]
                        (rand-events total player)))
        _ (prn events)
        results (feed-all (ref players) events)]
    (apply await (map #(agent-for-player (:player %)) players))
    @results))

(comment
  (lookup PLAYERS "A")
  (update-stats PLAYERS {:player "A" :result :hit})
  (rand-event {:ability 30/100})
  (rand-events 3 {:player "A" :ability 32/100})
  (let [db (ref PLAYERS)]
    (feed-all db (rand-events 100 {:player "A" :ability 32/100})))
  (count @(agent-for-player "A"))
  (effect-all {} @(agent-for-player "A"))
  (simulate 2 PLAYERS))

;;; Code as Data as Code
(defn relative-units [context unit]
  (if-let [spec (get context unit)]
    (if (vector? spec)
      (convert context spec)
      spec)
    (throw (RuntimeException. (str "Undefined unit " unit)))))

(relative-units {:m 1, :km 1000 :cm 1/100 :mm [1/10 :cm]} :mm)

(defmacro defunits-of [name base-unit & conversions]
  (let [magnitude (gensym)
        unit (gensym)
        units-map (into `{~base-unit 1}
                        (map vec (partition 2 conversions)))]
    `(defmacro ~(symbol (str "unit-of-" name))
       [~magnitude ~unit]
       `(* ~~magnitude
           ~(case ~unit
              ~@(mapcat
                 (fn [[u# & r#]]
                   `[~u# ~(relative-units units-map u#)])
                 units-map))))))

(defunits-of distance :m
  :km 1000
  :cm 1/100
  :mm [1/10 :cm]
  :ft 0.3048
  :mile [5280 :ft])

(unit-of-distance 1 :m)

(defn t []
  ;; {:count 0}
  nil)

(when-not (= (:count (t)) 1)
  (t))

(= (:count nil) 1)

(keep #(when (odd? %)
         %) [1 2 3 4])

