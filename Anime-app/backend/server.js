const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient()
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const port=8080;
 

app.use(cors());


async function main() {
    await prisma.$connect();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})


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

