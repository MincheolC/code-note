(ns toast.alarmtalk
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]))

;; Env
(def plus-friend-id "@팜허브")
(def template-code "soldout")
(def appkey "VngC4rONsyYJNs5t")
(def secret "XFGcBucq")
(def alimtalk-url 
  (format "https://api-alimtalk.cloud.toast.com/alimtalk/v1.5/appkeys/%s/messages" appkey))

(defn sendAlimtalk []
  (let [headers {:content-type "application/json;charset=UTF-8"
                "X-Secret-Key" secret}
        body (json/write-str {:plusFriendId plus-friend-id
                              :templateCode template-code
                              :recipientList [{:recipientNo "01066470203"
                                               :templateParameter {"이름" "차민철"
                                                                   "상품명 - 초당옥수수" "활전복1kg(14~15미)"}}]})]
    (client/post alimtalk-url {:headers headers
                               :body body})))

(comment
  (prn (sendAlimtalk)))

