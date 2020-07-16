const db = require("../../config/db")

module.exports = {
    create(data, callback){
        const query = `
            INSERT INTO chefs(
                name,
                avatar_url,
                created_at
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        const values = [
            data.name, 
            data.avatar_url,
            data.created_at
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    }
}