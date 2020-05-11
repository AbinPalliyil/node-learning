const path = require('path');

const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

//parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res, next) => {
	res.send('Homepage');
});

app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

//error page
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'view', 'error-page.html'));
});

app.listen(5000, () => {
	console.log('App is running in port 5000');
});
