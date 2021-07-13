(ns user
  (:require [clojure.test :refer [deftest is testing run-tests]]))

(deftest add
  (testing "[Valid] Add Two number"
    (is (= 4 (+ 2 2))))

  (testing "[Invalid] Add Two number"
    (is (not= 4 (+ 2 3)))))

(run-tests)