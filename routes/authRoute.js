const router = require('express').Router()

const {getSignupForm, getLoginForm, postSignupForm, postLoginForm, getLoggedForm} = require('../controller/authController')
 
router.get('/signup', getSignupForm)

router.get('/login', getLoginForm)

router.post('/signup', postSignupForm)

router.post('/login', postLoginForm)
router.get('/loggedin', getLoggedForm)

module.exports = router