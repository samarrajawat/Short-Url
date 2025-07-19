const express = require('express')
const path = require('path')
const {connectMongoDb} = require('./connection')
const URL  = require('./models/url')
const cookieParser = require('cookie-parser')
const {restrictToLoggedinUserOnly,checkAuth,restrictTo} = require('./middlewares/auth')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express();
const port = 5001


connectMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log('mongodb is connected..'))
.catch((err)=>console.log('error is ',err));

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))



app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.static('public'))

app.use('/url',restrictToLoggedinUserOnly,restrictTo(['Normal','Admin']),urlRoute)
app.use('/',checkAuth,staticRoute)
app.use('/user',userRoute)


app.listen(port,()=>console.log(`server is started at port no : ${port}`))