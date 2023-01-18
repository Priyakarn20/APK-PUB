const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    phonenumber:{
        type:Number,
    required:true,
    validate(value){
        if(value.length < 10)
        throw new Error("10 digits are must")
    }
    },
    email:{
        type:String,
    required:true,
    },
    subject:{
        type:String,
    required:true,
},
    message:String
})

const userData = mongoose.model('userData', userSchema);
module.exports = userData;