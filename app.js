const path = require('path');

const express = require('express');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

//setting viewengine
app.set('view engine', 'ejs');
app.set('views', 'view');

//parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))




app.use('/admin', adminData.router);
app.use('/shop', shopRoute);

//error page
app.use((req, res, next) => {
	res.status(404).render('404', {pageTitle: 'page not found'});
});

app.listen(5000, () => {
	console.log('App is running in port 5000');
});
