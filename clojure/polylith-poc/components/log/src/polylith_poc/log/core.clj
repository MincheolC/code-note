(ns polylith-poc.log.core
  (:require [clojure.tools.logging :as log]))

(defmacro info [args]
  `(log/info ~args))

(defmacro warn [args]
  `(log/warn ~args))

(defmacro error [args]
  `(log/error ~args))
