(ns basic.cond
  (:require [basic.redef :as r]))

(def type' "E")
(cond-> [:and [:= :user_id 1] [:= :code "2"]]
  type' (conj [:= :type (name type')]))


(->> {:a 1}
    :a)

(with-redefs [r/original (fn []
                         "redef")]
  (r/redef-test))