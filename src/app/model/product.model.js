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

module.exports = Product;