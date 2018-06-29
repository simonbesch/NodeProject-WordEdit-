import express from "express"
import path from "path"
import favicon from "serve-favicon"
import passport from "passport"
import volleyball from "volleyball"
import {LocalStrategy} from "passport-local"
import multer from "multer"
import session from "express-session"
import bodyParser from "body-parser"
// config body-parseur

//
var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//config multer
const upload = multer({dest:'./uploads'})
//
import flash from "connect-flash"
import mongoose from "mongoose"
const port = 4567
//config mongo
mongoose.connect('mongodb://localhost/auth_db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[MONGODB][server ok] ===> connected!')
});
//
import {routes} from "./routes/index"
import {users} from "./routes/users"
//view engine setup
app.set("views" ,path.join(__dirname,'views'))
app.set('view engine', 'pug')
//
app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash())
//passport config
app.use(passport.initialize())
app.use(passport.session())
//
app.use('/', routes)
app.use('/users', users)
//
app.listen(port,() =>{
  console.log(`[App running on port : ${port}]`);
})

const start ="server start"
console.log(`${start}`);
