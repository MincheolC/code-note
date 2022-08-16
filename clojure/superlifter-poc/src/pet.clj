(ns pet)

(def pets [{:id 1}
           {:id 2}
           {:id 3}])

(def pet-details [{:id 1 :pet-id 1 :name "A"}
                  {:id 2 :pet-id 2 :name "B"}
                  {:id 3 :pet-id 3 :name "C"}])

(defn resolve-pets [_context _args _parent]
  pets)

(defn resolve-pet-detail [_context _args parent]
  (let [grouped (->> pet-details
                     (group-by :id))]
    (-> grouped
        (get (:pet-id parent))
        first)))

(def resolvers {:resolve-pets resolve-pets
                :resolve-pet-detail resolve-pet-detail})


