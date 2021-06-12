const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully retrieved",
        data: [],
        code: 200,
        version: 1
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully created",
        data: req.params,
        code: 200,
        version: 1
    });
});

router.get('/:productId', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully retrieved",
        data: req.params.productId,
        code: 200,
        version: 1
    });
});

router.patch('/:productId', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully retrieved",
        data: req.params.productId,
        code: 200,
        version: 1
    });
});

router.delete('/:productId', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully deleted",
        data: req.params.productId,
        code: 200,
        version: 1
    });
});

module.exports = router;