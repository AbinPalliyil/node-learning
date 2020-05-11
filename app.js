const express = require('express');

const app = express();

//parse data
app.use(express.urlencoded({extended: false}));


app.get('/add-product', (req, res, next) => {
    res.send(
		'<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>',
	);
})

app.post('/product', (req, res, next) => {
	res.send('/');
});
//root routes always last
app.get('/', (req, res, next) => {
    res.send('Homepage')
})



app.listen(5000, () => {
	console.log('App is running in port 5000');
});
