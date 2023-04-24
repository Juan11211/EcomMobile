const express = require('express');
const productRouter = express.Router();
const {getAllProducts, getProduct} = require('../database/products')

productRouter.get('/', async (req, res, next) => {
    const products = await getAllProducts();
    
    res.send({ status: 200, data: products })
})

productRouter.get('/:productId', async(req, res, next) => {
    try{
        const product = await getProduct(req.params.productId) 

        if(!product){
            res.status(404).send({status: 'Failed', error: 'Product does not exist'})
            return
        }
            res.send({status: 200, data: product})
    } catch(error){
        res.status(401).send({status: 'Unathorized Response', error: error.message})
    }
})

module.exports = productRouter; 