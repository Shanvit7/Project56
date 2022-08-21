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
        greet:()=> 'Welcome to Anime server..',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res=>{
server.applyMiddleware({app});
app.listen(port, () => {console.log('GraphQL server is proxied at 8080');})
});

