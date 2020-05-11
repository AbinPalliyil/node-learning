const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('First middleware');
	next();
});

app.use((req, res, next) => {
	console.log('Second middleware');
	res.send('Middleware example');
});

app.listen(5000, () => {
	console.log('App is running in port 5000');
});
