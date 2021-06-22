(ns dependencies-tutorial.core
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]))

(s/valid? string? "a string")
(s/valid? string? 1)

(def short-string? (s/and string? #(< (count %) 5)))

(s/valid? short-string? "and")
(s/valid? short-string? "on the code again")

(def col-of-short-string (s/coll-of short-string?))

(s/valid? col-of-short-string ["a" "b" "c"])
(s/valid? col-of-short-string ["a" "b" "c" 1])
(s/valid? col-of-short-string ["a" "b" "c" "on the code again"])

;; Key를 쓰는 이유는 s/explain 결과에 표현되어 디버깅이 쉬워짐
(def short-string-or-number? (s/or :short-string short-string? :is-number number?))

(s/valid? short-string-or-number? 1)
(s/valid? short-string-or-number? "on the code again")

(s/explain short-string-or-number? "on the code again")

(def f1-car {:team "Mercedez"
             :driver "Charles"
             :starting-pos 1
             :positions [18 3 10 6]})

;; qualified & unqualified keywords
(s/def ::f1-car-spec ; = :dependencies-tutorial.core/f1-car-spec
  (s/keys :req-un [::team ::driver ::starting-pos ::positions]))

(s/valid? ::f1-car-spec f1-car)

(s/def ::team string?)
(s/def ::driver string?)
(s/def ::starting-pos int?)
(s/def ::positions (s/coll-of int?))

(s/explain ::f1-car-spec f1-car)
(s/conform ::f1-car-spec f1-car) ; {:team "Mercedez", :driver "Charles", :starting-pos 1} or :clojure.spec.alpha/invalid

(defn scored? [last-pos min-pos]
  (< last-pos min-pos))

(scored? (first (:positions f1-car)) "10")

(s/fdef scored?
  :args (s/cat :last-pos int? :min-pos int?)
        :ret boolean?
        :fn (fn [{:keys [args ret]}]
              (let [last-pos (:last-pos args)]
                (< last-pos 6))))

(stest/instrument 'dependencies-tutorial.core/scored?)

(stest/check 'dependencies-tutorial.core/scored?)
