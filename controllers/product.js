const Product = require('../models/product');

//Get product list
exports.getProducts = (req, res, next) => {
	const product = Product.fetchAll(product => {
		res.render('shop', {
			pageTitle: 'ViewProducts',
			products: product,
		});
	});
	
};

//Get add product form
exports.getAddProduct = (req, res, next) => {
	res.render('add-product', { pageTitle: 'Add Products' });
};

//Add product
exports.addProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();

	res.redirect('/shop');
};
