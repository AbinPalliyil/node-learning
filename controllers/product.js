//To store product
const product = [];

//Get product list
exports.getProducts = (req, res, next) => {
	res.render('shop', {
		pageTitle: 'ViewProducts',
		products: product,
	});
};

//Get add product form
exports.getAddProduct = (req, res, next) => {
	res.render('add-product', { pageTitle: 'Add Products' });
};

//Add product
exports.addProduct = (req, res, next) => {
	product.push({title: req.body.title})
	res.redirect('/shop');
}
