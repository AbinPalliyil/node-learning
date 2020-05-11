const express = require('express');
const router = express.Router();

/**
 * Get api/admin/add-product
 * @desc This is get method to add-product
 * @access Private
 */
router.get('/add-product', (req, res, next) => {
	res.send(
		'<form action="/api/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>',
	);
});

/**
 * Post api/admin/add-product
 * @desc This is post method to add-product
 * @access Private
 */
router.post('/add-product', (req, res, next) => {
	res.redirect('/');
});

module.exports = router;
