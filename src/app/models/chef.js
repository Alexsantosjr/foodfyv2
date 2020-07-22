const db = require("../../config/db")
const { date } = require("../../lib/utils")

module.exports = {
    create(data, callback){
        const query = `
            INSERT INTO chefs(
                name,
                avatar_url,
                services,
                email,           
                created_at
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `
        const values = [
            data.name, 
            data.avatar_url,
            data.services,
            data.email,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback){
        db.query(`
            SELECT *
            FROM chefs
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database error! ${err}`
                callback(results.rows[0])
            })
    }
}