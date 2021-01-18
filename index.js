const { ApolloServer } = require('apollo-server');
const userSchema = require('./api/user/schema/user.graphql')

const users = [
    {
        nome: 'Reginaldo',
        ativo: true
    },
    {
        nome: 'Augusta',
        ativo: false
    }
]

const typeDefs = [userSchema];
const resolvers = { };

const server = new ApolloServer({ typeDefs, resolvers });