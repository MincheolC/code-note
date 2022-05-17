(ns polylith-poc.log.interface
  (:require [polylith-poc.log.core :as core]))

(defmacro info [& args]
  `(core/info ~args))

(defmacro warn [& args]
  `(core/warn ~args))

(defmacro error [& args]
  `(core/error ~args))
