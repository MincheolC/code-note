(ns advanced.spec-test
  (:require [clojure.test :refer [deftest testing is run-tests]]
            [advanced.spec :as spec]))

(deftest test-product-id
  (testing "Invalid values"
    (let [invalid-inputs [nil "" " " "123" "abcdef" "1234ABCDE" 1]]
      (run! #(is (thrown? AssertionError (spec/test-product-id %)))
            invalid-inputs)))
  
  (testing "Valid"
    (let [expected "FM_1010EC"]
      (is (= expected (spec/test-product-ids expected))))))

(deftest test-lambda-input
  (testing "Invalid values"
    (let [invalid-inputs [{:product-ids nil}
                          {:date-str "20210407"}
                          {:date-str nil        :product-ids nil}
                          {:date-str "nil"      :product-ids "nil"}
                          {:date-str "20210407" :product-ids nil}
                          {:date-str "20210407" :product-ids "abcdefg"}
                          {:date-str nil        :product-ids "쌀"}
                          {:date-str "쌀"        :product-ids "20210407"}]]
      (run! #(is (thrown? AssertionError (spec/test-lambda-input %)))
            invalid-inputs)))
  
  (testing "Valid"
    (let [expecteds [{:date-str "20210407"  :product-ids ["FM_1010EC"]}
                     {:date-str "20210407"  :product-ids ["RC_grain_쌀"]}]]
      (run! #(is (= % (spec/test-lambda-input %)))
            expecteds))))

(run-tests)