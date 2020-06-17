const express = require("express")
const routes = express.Router()
const newreceitas = require("./data")
const recipes = require("./controllers/recipes")

//Padrão
routes.get("/receitas", recipes.receitas);
routes.get("/", recipes.home);
routes.get("/sobre", recipes.sobre);
routes.get("/receita", recipes.receita);

//Admin Create
routes.get("/admin/create", recipes.create); // Mostrar formulário de nova receita

//Admin Post
routes.post("/admin", recipes.post); // Cadastrar nova receita


module.exports = routes