const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use('/products', require('./routes/productRoute'))
app.use('/orders', require('./routes/orderRouter'))

app.listen(9000, () => {
    console.log('You are now running on Port 9000')
})