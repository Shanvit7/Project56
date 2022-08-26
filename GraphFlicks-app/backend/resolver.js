const Users = require('./models/user.model');

const resolvers={
    Query:{
        appName:()=> 'AnimeGraph',
        getUsers:async()=>{ return await Users.find({})}
    },
};

module.exports = resolvers;