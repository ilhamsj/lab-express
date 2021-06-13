const products = require('../model/product')

exports.all = (req, res) => {
    products.get((err, products) => {
        res.status(200).json({
            success: true,
            message: "Data Successfully retrieved",
            data: products,
            code: 200,
            version: 1
        });
    });

}