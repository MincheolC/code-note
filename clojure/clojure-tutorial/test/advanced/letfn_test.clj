(ns advanced.letfn-test
  (:require [clojure.test :refer [deftest is]]
            [advanced.letfn :refer [letfn']]))

(deftest letfn-test
  (is (= 11 (letfn' 3)) "should be 11")
  (is (not= 11 (letfn' 4)) "should not be 11"))
