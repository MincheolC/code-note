const { gql } = require('apollo-server-express')
const model = require('../models')
const typeDefs = gql`
    union Given = Equipment | Supply
`
const resolvers = {
    Query: {
        givens: (parent, args) => {
            return [
                ...model.getEquipments(args),
                ...model.getSupplies(args)
            ]
        }
    },
    Given: {
        __resolveType(given, context, info) {
            if (given.used_by) {
                return 'Equipment'
            }
            if (given.team) {
                return 'Supply'
            }
            return null
        }
    }
}
module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}