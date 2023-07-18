const userModel = require('../model/userSchema')

const getHome = async (req, res) => {
    await userModel.find()
    .then(response =>{
     res.render("views", {response})
     console.log(response)
    })
    .catch(error => console.log(error.message))
     
 }

 const getForm = (req,res)=>{
    res.render("registrationForm")
}


const postForm = async(req, res) => {
    const {name, email, password} = req.body
    console.log(req.body)
    const dataToBeSavedToDatabase = new userModel({
        name,
        email,
        password
    })
   await dataToBeSavedToDatabase.save()
   .then(response =>{
      res.render('/views')
   })
   .catch(error => console.log(error.message))
}

const getAltForm = (req, res) => {
    res.render('altForm')
}




module.exports = {getHome, getForm, postForm, getAltForm}