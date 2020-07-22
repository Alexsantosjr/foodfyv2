const Chef = require("../models/chef")
const { date } = require("../../lib/utils")

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
    show(req, res){

        Chef.find(req.params.id, function(chefs){
            if (!chefs) return res.send("Chef not found!")

            chefs.created_at = date(chefs.created_at).format

            return res.render("chef/show", { chefs })

        })
    }
}