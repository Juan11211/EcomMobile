const express = require('express');
const { createOrder, getOrder } = require('../database/orders');
const orderRouter = express.Router();


orderRouter.get('/:reference', async(req, res, next) => {

    const order = await getOrder(req.params.reference); 

    if(!order){
        res.status(404).send({status: 'FAILED', error: "Order not found"})
        return;
    }
    res.send({ status: 200, data: order})
    
})


orderRouter.post('/', async(req, res, next) => {
    const orderData = req.body; 
    if(!orderData){
        res.status(500).send('Order does not exist')
    }

    orderData.ref = (Math.random() + 1).toString(36).substring(7); // generates random ref code. 


 
    const newOrder = await createOrder(orderData);
    res.status(201).send({ status: '201', data: newOrder});
} )

module.exports = orderRouter