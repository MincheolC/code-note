const { gql } = require('apollo-server-express');
const model = require('../models')
 
// gql (template literal tag)
const typeDefs = gql`
  type Equipment {
    id: String
    used_by: Role!
    count: Int
    new_or_used: NewOrUsed!
  }
`;

const resolvers = {
    Query: {
      equipments: (parent, args) => model.getEquipments(args),
    },
    Mutation: {
        insertEquipment: (parent, args, context, info) => model.postEquipment(args),
        deleteEquipment: (parent, args, context, info) => model.deleteItem('equipments', args)
    }
  };

module.exports = {
    typeDefs,
    resolvers,
}