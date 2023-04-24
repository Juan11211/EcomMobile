const express = require('express');
const orderRouter = express.Router();

orderRouter.get('/:reference', async(req, res, next) => {
    res.send(`Getting order with reference ${req.params.reference}`)
    
})


orderRouter.post('/', async(req, res, next) => {
    res.send('creating an order')
} )

module.exports = orderRouter