const authModel = require('../model/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


function errorHandler(err){
    let errors = {email: "", password: ""}
    if(err.message === "wrong email"){
        errors.email = "please enter a valid email address."
        return errors
    }
    
    if(err.message === "wrong password"){
        errors.password = 'user password is incorrect.'
        return errors
       
    }
    return errors
}


//get our signup form
const getSignupForm = (req, res) => {
    res.render('signup')
}


//get our login form
const getLoginForm = (req, res) => {
    res.render('login')
}

const getLoggedForm = (req, res)=>{
    res.render('loggedin')
}



//post our signup form 
const postSignupForm = async (req, res) => {
    try{
        const {name, email, password} = req.body
        console.log(req.body)
        const salt = await bcrypt.genSalt()
        const newPassword = await bcrypt.hash(password, salt)
        const newUser = authModel({
            name,
            email,
            password: newPassword
        })
        newUser.save()
        res.status(201).redirect('/login')
        
    }
    catch(err){
        console.log(err)
    }
}

//post our login form
const postLoginForm = async (req, res) => {
    try{
        const {name, email, password} = req.body
        const user = await authModel.findOne({email})
        console.log(user)
        if(user){
            const isPassword = await bcrypt.compare(password, user.password)
            if(isPassword){
                const verified = jwt.sign({id: user._id}, 'secret', {}, (err, token) => {
                    if(err){
                        console.log(err)
                        
                    }else{
                        console.log(token)
                        res.cookie('token', token)
                        res.status(200).json({user:user})
                        res.status(201).redirect('/loggedin')
                       
                    }
                })
            }else{
                throw Error('wrong password')            }
        }else{
            throw Error('wrong email')
        }
    }

    catch(err){
        console.log(err.message)
        let errors = errorHandler(err)
        res.status(400).json({error: errors})
    }
}

module.exports = {getSignupForm, getLoginForm, postSignupForm, postLoginForm, getLoggedForm}