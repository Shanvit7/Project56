const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({

    name:{
       type:String,
    },
    profile:{
        type:String,
    }

})

const Users = mongoose.model('Users',UserSchema );
module.exports= Users;  