const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')

//To store product
const product = [];

/**
 * Get api/admin/add-product
 * @desc This is get method to add-product
 * @access Private
 */
router.get('/add-product', (req, res, next) => {

	res.sendFile(path.join(rootDir, 'view', 'add-product.html'));
});

/**
 * Post api/admin/add-product
 * @desc This is post method to add-product
 * @access Private
 */
router.post('/add-product', (req, res, next) => {
	console.log(req.body)
	product.push({title: req.body.title})
	res.redirect('/shop');
});

exports.router = router;
exports.product = product;
