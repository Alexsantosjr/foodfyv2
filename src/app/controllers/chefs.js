const Chef = require("../models/chef")

module.exports = {
    post(req, res){

        const keys = Object.keys(req.body)
    
        for (key of keys)
            if (req.body[key] == ""){
        return res.send("Please fill all fields")
        }
    
        Chef.create(req.body, function(chefs){
            return res.redirect(`/chef/${chefs.id}`)
        })
    },
    show(req,res){
        return res.render("chef/show")
    }
}