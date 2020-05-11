const express = require('express');
const router = express.Router();

/** Get api/shop/
 * @desc To fetch product details
 * @access Public
 */
router.get('/', (req, res, next) => {
	res.send('Product page');
});

module.exports = router;
