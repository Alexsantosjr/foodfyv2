const db = require("../../config/db")
const { date } = require("../../lib/utils")

module.exports = {
    create(data, callback){
        const query = `
            INSERT INTO recipes(
                tittle,
                image,
                ingredients,
                preparation,
                information,
                chef_id,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `
        const values = [
            data.tittle,
            data.image,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef_id,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database error ${err}`

            callback(results.rows[0])
        })
    }
}