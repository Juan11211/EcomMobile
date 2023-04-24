const express = require('express');
const { createOrder } = require('../database/orders');
const orderRouter = express.Router();


orderRouter.get('/:reference', async(req, res, next) => {

    const order = await getOrders(req.params.reference); 

    if(!order){
        res.status(404).send()
    }
    res.send(`Getting order with reference ${req.params.reference}`)
    
})


orderRouter.post('/:orderDate', async(req, res, next) => {
    const orderData = req.body; 
    
    orderData.ref = (Math.random() + 1).toString(36).substring(7);


 
    const newOrder = await createOrder(orderData);
    res.status(201).send({ status: '201', data: newOrder});
} )

module.exports = orderRouter