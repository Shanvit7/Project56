const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const typeDefs  = require('./typeDefs');
const resolvers = require('./resolver');
const mongoose = require('mongoose');
const cors = require('cors');
const port=8080;


 

async function startServer(){
   const MONGODB='mongodb+srv://shanvit:jojobizzare@anime-cluster.errtxi3.mongodb.net/Anime-DB?retryWrites=true&w=majority';
   const app = express();
   app.use(express.json());
   const apolloServer = new ApolloServer({ typeDefs,resolvers });
   app.use(cors());
   await apolloServer.start();
   apolloServer.applyMiddleware({app});
   mongoose.connect(MONGODB,{
      useUnifiedTopology:true,
      useNewUrlParser:true,
   })
   .then().catch(err=>{console.log(err)});
   let db = mongoose.connection;
   db.on("error", console.error.bind(console, "connection error: "));
   db.once("open", function () {
     console.log("Connected successfully");
   });
   app.listen(port, () => {console.log('GraphQL server is proxied at 8080');})
}

startServer();