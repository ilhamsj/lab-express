const mysql = require('mysql')
const database = require('./database')

var connection = mysql.createConnection({
    host: database.HOST,
    user: database.USER,
    password: database.PASSWORD,
    database: database.DB
})

connection.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log("Database Connected")
    }
})

module.exports = connection;