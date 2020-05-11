const path = require('path');

const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

//parse data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.send('Homepage');
});

app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

//error page
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, 'view', 'error-page.html'));
});

app.listen(5000, () => {
	console.log('App is running in port 5000');
});
