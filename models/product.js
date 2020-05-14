const path = require('path');
const fs = require('fs');

const pathDir = require('../util/path');

const filePath = path.join(pathDir, 'data', 'product,json');

const getProductfromFile = (cb) => {
	fs.readFile(filePath, (err, fileData) => {
		if (err) {
			return cb([]);
		}
		cb(JSON.parse(fileData));
	});
};

const product = [];

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		getProductfromFile((products) => {
			products.push(this);
			fs.writeFile(filePath, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getProductfromFile(cb);
	}
};
