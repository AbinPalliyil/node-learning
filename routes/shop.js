const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')
const adminData = require('./admin')



/** Get api/shop/
 * @desc To fetch product details
 * @access Public
 */
router.get('/', (req, res, next) => {
	console.log("productList",adminData.product)
	res.sendFile(path.join(rootDir,'view', 'shop.html'));
});

module.exports = router;
