const database = require('../config/connection');

const Product = (product) => {
    this.name = product.name;
    this.quantity = product.quantity;
    this.image = product.image;
}

Product.get = (result) => {
    database.query("SELECT * FROM products", function (err, rows) {
        result(err, rows)
    })
}

Product.find = (id, result) => {
    database.query(`SELECT * FROM products WHERE id = ?`, id, function (err, rows) {
        result(err, rows)
    })
}

Product.deleteById = (id, result) => {
    database.query(`DELETE FROM products WHERE id = ?`, id, function (err, rows) {
        result(err, rows)
    })
}

module.exports = Product;