
const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }

});
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema)

module.exports = User
