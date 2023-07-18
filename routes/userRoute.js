const router = require('express').Router()

const {getHome, getForm, postForm} = require("../controller/userController")



router.get('/views', getHome)
 
 router.get("/registrationForm", getForm)
 
 router.post('/signupForm', postForm)

 

 

 module.exports = router