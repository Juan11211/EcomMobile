const {MongoClient} = require('mongodb');
require('dotenv').config() 

const uri = process.env.MONGO_CONNECTION

const client = new MongoClient(uri);

const database = client.db('test'); // name of collection
const products = database.collection('products'); // name of subcollection
const orders = database.collection('orders'); // if no collection with that name, mongoDB auto creates one

module.exports = { 
    products,
    orders
}