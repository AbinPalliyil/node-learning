const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')



/** Get api/shop/
 * @desc To fetch product details
 * @access Public
 */
router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir,'view', 'shop.html'));
});

module.exports = router;
