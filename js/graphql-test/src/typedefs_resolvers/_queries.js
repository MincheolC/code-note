const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    teams: [Team]
    equipments: [Equipment]
    supplies: [Supply]
    givens: [Given]
  }`;

module.exports = typeDefs