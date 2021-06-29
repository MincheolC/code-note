// https://www.yalco.kr/lectures/graphql-apollo/

const express = require('express');
const fp = require('lodash/fp');
const { ApolloServer } = require('apollo-server-express');

const mutations = require('./typedefs_resolvers/_mutations')
const queries = require('./typedefs_resolvers/_queries');
const enums = require('./typedefs_resolvers/_enums');
const equipments = require('./typedefs_resolvers/equipments');
const supplies = require('./typedefs_resolvers/supplies');
const teams = require('./typedefs_resolvers/teams');
const givens = require('./typedefs_resolvers/givens');

const typeDefs = [
    mutations,
    queries,
    enums,
    equipments.typeDefs,
    supplies.typeDefs,
    teams.typeDefs,
    givens.typeDefs,
]

const resolvers = [
    equipments.resolvers,
    teams.resolvers,
    supplies.resolvers,
    givens.resolvers,
]
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);