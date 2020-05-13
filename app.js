const path = require('path');

const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorControler = require('./controllers/error')

const app = express();

//setting viewengine
app.set('view engine', 'ejs');
app.set('views', 'view');

//parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))




app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

//error page
app.use(errorControler.getErrorPage);

app.listen(5000, () => {
	console.log('App is running in port 5000');
});
