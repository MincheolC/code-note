(ns advanced.datafiable
  (:require [clojure.core.protocols :as p])
  (:import (java.util ArrayList LinkedHashMap)))

(extend-protocol p/Datafiable
  java.util.Map
  (p/datafy [o] (let [entries (.entrySet o)]
                  (reduce (fn [m [^String k v]]
                            (assoc m (keyword k) (p/datafy v)))
                          {} entries)))

  java.util.List
  (p/datafy [o] (vec (map p/datafy o))))


(def j-sub-map (doto (new LinkedHashMap)
                 (.put "sub" true)))
(def j-map (doto (new LinkedHashMap)
             (.put "version" "0")
             (.put "id" "73a34a8f-a920-0683-d52a-e68891fb34d5")
             (.put "account" "887960154422")
             (.put "time" "2021-08-03T01:17:10Z")
             (.put "resources" (new ArrayList ["arn:aws:events:ap-northeast-2:887960154422:rule/test-every-minutes"]))
             (.put "detail" j-sub-map)))

(p/datafy j-map)


(defn t [& args]
  args)

(t 1 2 3 4 5)

(let [{:keys [a b] :as body} {:a 1 :b 2 :c 3 :d 4}]
  [a b body])

(time (filter identity [nil 1 nil]))
(time (remove nil? [nil 1 nil]))

(get-in {:a {:b 1}} [:a :b])

(defn key-t [{::keys [a]}]
  (prn (type a)))

(key-t {::a 1})

