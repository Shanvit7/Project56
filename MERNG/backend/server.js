const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const port=8080;
 
app.use(cors());

const typeDefs= gql`
 type Query {
    greet: String
 }
`;

const resolvers={
    Query:{
        greet:()=> 'Welcome to GraphQL server..',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res=>{
server.applyMiddleware({app});
app.listen(port, () => {console.log('GraphQL server proxied at 8080');})
});

