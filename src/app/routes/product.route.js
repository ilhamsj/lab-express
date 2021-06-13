const express = require('express');
const router = express.Router();

const { productController } = require('../controllers/index')

router.get('/', productController.all);
router.post('/', productController.store);
router.patch('/', productController.updateById);
router.get('/:productId', productController.find);
router.delete('/:productId', productController.deleteById);

module.exports = router;