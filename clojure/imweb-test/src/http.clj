(ns http
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.string :as str]
            [clojure.walk :refer [keywordize-keys]]))

(defn- request [f & args]
  (let [response (apply f args)
        body (:body response)]
    (if (str/starts-with? body "{")
      (-> body
          json/read-str
          keywordize-keys)
      body)))

(defn post' [{:keys [url headers body]}]
  (request client/post url {:headers headers
                            :body (json/write-str body)}))

(defn patch' [{:keys [url headers body]}]
  (request client/patch url {:headers headers
                             :body (json/write-str body)}))

(defn get' [{:keys [url headers query-params body]}]
  (request client/get url {:headers      headers
                           :query-params query-params
                           :body         (json/write-str body)}))

(comment
  (str/starts-with? "<hello>" "<"))
