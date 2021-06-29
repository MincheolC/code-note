const { gql } = require('apollo-server-express');
const model = require('../models')
 
// gql (template literal tag)
const typeDefs = gql`
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`;

const resolvers = {
    Query: {
      teams: () => model.getTeams(),
    },
  };

module.exports = {
    typeDefs,
    resolvers,
}