const fs = require("fs")
const data = require("../data.json")
const newreceitas = require("../data.js")

//Padrao
exports.receitas = function(req, res){
    return res.render("receitas", {items: newreceitas})
}
exports.home = function(req, res){
    return res.render("home")
}
exports.sobre = function(req, res){
    return res.render("sobre")
}
exports.receita = function(req, res){
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
}


//create
exports.create = function(req, res){
    return res.render("admin/create")
}

//post
exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for (key of keys)
        if (req.body[key] == ""){
    return res.send("Please fill all fields")
    }

    const id = Number (data.recipes.length + 1)

    let {
        image,
        infomax,
        description,
        ingredients,
    } = req.body

    data.recipes.push({
        id,
        image,
        description,
        ingredients,
        infomax
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect('/')
    })
}
