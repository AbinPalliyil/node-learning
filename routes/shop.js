const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

/** Get api/shop/
 * @desc To fetch product details
 * @access Public
 */
router.get('/', (req, res, next) => {
	res.render('shop', {
		pageTitle: 'ViewProducts',
		products: adminData.product,
	});
});

module.exports = router;
