import express from "express"
const routes = express.Router()

//get -home page
routes.get('/', (req, res) =>{
  res.render("index", {title:"Accueil"})
})

export { routes }
