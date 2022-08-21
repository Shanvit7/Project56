const Users = require('./models/user.model');

const resolvers={
    Query:{
        greet:()=> 'Welcome to Anime server..',
        getUsers:async()=>{ return await Users.find({})}
    },
};

module.exports = resolvers;