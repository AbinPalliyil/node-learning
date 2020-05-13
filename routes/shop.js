const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

/** Get api/shop/
 * @desc To fetch product details
 * @access Public
 */
router.get('/', productController.getProducts);

module.exports = router;
