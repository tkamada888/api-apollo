const { ApolloServer } = require('apollo-server');
const userSchema = require('../api-apollo/api/user/schema/user.graphql')
const userResolvers = require('../api-apollo/api/user/resolvers/userResolvers')
const UsersAPI = require('../api-apollo/api/user/datasource/user')

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({ typeDefs, resolvers, dataSources: () =>{
    return {
        usersAPI: new UsersAPI()
    }
} });

server.listen().then(({url}) =>{
    console.log(`Servidor rodando na porta ${url}`)
})