import express from "express"
const users = express.Router()
import { User } from '../model/user'
import multer from 'multer'
const uploads = multer({dest:'./uploads'})
import bodyParser from "body-parser"
//
// users.get("/", (req, res) => {
//   res.send("ok")
// })
//
users.get("/register", (req, res) => {
  res.render("register",{title:"Writing History"})
});

users.post('/register', (req, res) => {
  const newUser = new User(req.body)
  if (req.file) {
    console.log('uploding img');
    const profileimage = req.file.filename
  }
  else {
    console.log('no img uploaded');
    const profileimage = 'noimage.png'
  }
  newUser.save((err, user) => {
    if (err) {
      // res.send(err)
      res.redirect('/')
      // alert("votre requete n'à pas était enregistrer, veuillez ressayer")
      console.log(err, "votre requete n'à pas était enregistrer, veuillez ressayer");
    } else {
      res.redirect('/')
      // res.send(req.body);
      console.log(req.body);
    }
  })
  // req.flash('succcess', 'vous pouvais vous co vous etes dans la BdD')
  //res.redirect('/')
})

users.get("/login", (req, res) => {
  res.render("login", {title:"login"})
});

users.get("/", (req, res) => {
  User.find({}, (err,users)=>{
    if(err) throw error
    res.render("membre",{
      users,
      title:"Histoires"
    })
  })
});

users.get("/:id", (req, res) => {
  console.log(req.params.id);
  User.find({_id:req.params.id}, (err,user)=>{
    if(err) throw error
    console.log(user[0]);
    console.log(user[0].name);
    user=user[0]

    res.render("histoire",{
      user,
      title: user.name
    })
  })
});

export {users}
