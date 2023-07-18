//imports
// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
const collection = require('./database/db')
const router = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')

const app = express();

// const PORT = process.env.PORT || 4000;
const PORT = 3000



app.use(express.static('public'))


//middlewares
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(authRouter)

// app.use(cookieParser())

//database connection


app.get('/', (req, res)=>{
    res.render("home");
});

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})




// app.post ('/signup', async(req, res) => {
//     const data = {
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     }
//     await collection.insertMany([data])
//     res.render('/home')
// })



app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`);
});

