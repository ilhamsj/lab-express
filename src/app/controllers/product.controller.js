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

exports.find = (req, res) => {
    products.find(req.params.productId, (err, products) => {
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

exports.deleteById = (req, res) => {
    products.deleteById(req.params.productId, (err, products) => {
        if (err) {
            console.error(err)
        }

        res.status(200).json({
            success: true,
            message: "Data Successfully deleted",
            data: [],
            code: 200,
            version: 1
        });
    });
}

exports.store = (req, res) => {

    var data = Object.values(req.body);
    products.create(data, (err, products) => {
        if (err) {
            console.error(err)
        }

        res.status(200).json({
            success: true,
            message: "Data Successfully stored",
            data: products,
            code: 200,
            version: 1
        });
    });
}