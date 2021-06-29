const { gql } = require('apollo-server-express');
const model = require('../models')
 
// gql (template literal tag)
const typeDefs = gql`
  type Supply {
    id: String
    team: Int
  }
`;

const resolvers = {
    Query: {
        supplies: (parent, args) => model.getSupplies(args),
    },
    Mutation: {
        deleteSupply: (parent, args) => model.deleteItem('supplies', args)
    }
  };

module.exports = {
    typeDefs,
    resolvers,
}