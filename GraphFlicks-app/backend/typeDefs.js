const {gql} = require('apollo-server-express');

const typeDefs= gql`

type Users {
   id:ID
   name:String
   profile:String
}

type Query {
   appName: String
   getUsers:[Users]
}



`;

module.exports = typeDefs;