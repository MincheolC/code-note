(ns advanced.special-form-test
  (:require [advanced.special-form :refer [pre' pre-value' post']]
            [clojure.test :refer [deftest testing is]]))

(deftest pre-test
  (testing "single value"
    (is (= (pre' 1) 1))
    (is (thrown? AssertionError (pre' -1))))
  
  (testing "multiple values"
    (is (= (pre-value' {} []) {:x {} :y []}))
    (is (thrown? AssertionError (pre-value' {} nil)))))

(deftest post-test
  (is (= (post' 1) 1))
  (is (thrown? AssertionError (post' -1))))
