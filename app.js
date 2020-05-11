const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

//parse data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.send('Homepage');
});

app.use('/api/admin', adminRoute);
app.use('/api/shop', shopRoute);

//error page
app.use((req, res, next) => {
	res.status(404).send('Page not found');
});



app.listen(5000, () => {
	console.log('App is running in port 5000');
});
