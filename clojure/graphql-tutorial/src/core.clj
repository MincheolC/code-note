(ns core
  (:require [ring.adapter.jetty :as ring]))

(defn handler [request]
  {:status 200
   :header {"Content-Type" "text/html"}
   :body "Hello World"})

(defonce server (ring/run-jetty handler {:port 3000
                                         :join? false}))
(comment
  (.stop server)
  (.start server)
  )
