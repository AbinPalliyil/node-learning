const path = require('path');

const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

/**
 * Get api/admin/add-product
 * @desc This is get method to add-product
 * @access Private
 */
router.get('/add-product', productController.getAddProduct);

/**
 * Post api/admin/add-product
 * @desc This is post method to add-product
 * @access Private
 */
router.post('/add-product', productController.addProduct);


module.exports = router;