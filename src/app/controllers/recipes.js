const Recipe = require("../models/recipe")

module.exports = {
receitas(req, res){
    return res.render("receitas")
},
home(req, res){
    return res.render("home")
},
sobre(req, res){
    return res.render("sobre")
},
receita(req, res){
    Recipe.show(req.params.id, function(recipes){
        if (!recipes) return res.send("Recipe not found!")

        recipes.ingredients= recipes.ingredients.split(",")

        return res.render("receita", {recipes})
    })
},
create(req, res){
    return res.render("admin/recipe/create")
},
post_create(req, res){
    const keys = Object.keys(req.body)

    Recipe.create(req.body, function (recipe){
        return res.redirect(`/admin/recipe/${recipe.id}`)
    })
},
chef(req, res){
    return res.render("chef/create")
},
}