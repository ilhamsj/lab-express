const products = require('../model/product.model')

exports.all = (req, res) => {
    products.get((err, products) => {
        if (err) {
            console.error(err)
        }

        res.status(200).json({
            success: true,
            message: "Data Successfully retrieved",
            data: products,
            code: 200,
            version: 1
        });
    });
}