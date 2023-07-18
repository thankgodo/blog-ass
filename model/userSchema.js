const mongoose = require('mongoose')



//our mongoose schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

//mongoose model
const userModel = mongoose.model('userCollection', userSchema)

module.exports = userModel