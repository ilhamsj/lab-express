const express = require('express');
const router = express.Router();

const { productController } = require('../controllers/index')

router.get('/', productController.all);
router.get('/:productId', productController.find);
router.delete('/:productId', productController.deleteById);

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Successfully created",
        data: req.params,
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

module.exports = router;