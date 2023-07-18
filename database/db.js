const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

function dbConnection(){
    mongoose.connect("mongodb://0.0.0.0:27017/blog1_DB")
    .then(Response => console.log("connected successfully to database"))
    .catch(error => console.log(error.message))
}

dbConnection()
