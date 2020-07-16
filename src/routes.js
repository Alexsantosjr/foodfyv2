const express = require("express")
const routes = express.Router()
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")

//Padrão
routes.get("/receitas", recipes.receitas);
routes.get("/", recipes.home);
routes.get("/sobre", recipes.sobre);
routes.get("/receita/:id", recipes.receita);

//Admin 
routes.get("/admin/recipe/create", recipes.create); // Mostrar formulário de nova receita
routes.post("/admin/", recipes.post_create)
//routes.post("/admin", recipes.post); // Cadastrar nova receita

//Chef Post
routes.get("/chef/create/", recipes.chef);
routes.post("/chef/", chefs.post);
routes.get("/chef/:id", chefs.show)


module.exports = routes