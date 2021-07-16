(ns advanced.fixture-test
  (:require [clojure.test :refer [is deftest use-fixtures run-tests join-fixtures compose-fixtures]]
            [advanced.fixture :refer [fixture1 fixture2 greeting]]))


;; = (use-fixtures :once fixture1 fixture2)
;; = (use-fixtures :once (join-fixtures [fixture1 fixture2]))
(use-fixtures :once (compose-fixtures fixture1 fixture2))

(deftest ft
  (greeting))

(run-tests)