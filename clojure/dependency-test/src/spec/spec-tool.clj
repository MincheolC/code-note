(ns spec.spec-tool
  (:refer-clojure :exclude [pos-int?])
  (:require [spec-tools.core :as st]
            [clojure.string :as str]))

(def pos-int? (st/spec
               {:spec clojure.core/pos-int?
                :name "pos-int?"
                :description "자연수만을 허용합니다."
                :swagger/example 1
                :json-schema/defualt 1}))

(prn pos-int?)