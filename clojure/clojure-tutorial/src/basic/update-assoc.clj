(ns basic.update-assoc)

(def state {:total nil
            :coll []})

(-> state
    (assoc :total 5)
    (update :coll #(into % [1]))
    (update :coll #(into % [2 3])))