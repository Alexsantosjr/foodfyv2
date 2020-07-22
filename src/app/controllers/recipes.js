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
    const id =  req.query.id
   
    const receita = newreceitas.find(function(receita){
        if (receita.id == id) {
            return true
        }
    })

    if(!receita){
        return res.send("Video not found!")
    }

    return res.render("receita", { item: receita })
},
create(req, res){
    return res.render("admin/create")
},
post_create(req, res){
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all fields")
        }
    }

    Recipe.create(req.body, function (recipe){
        return res.redirect(`/admin/create/${recipe.id}`)
    })
},
chef(req, res){
    return res.render("chef/create")
},
}