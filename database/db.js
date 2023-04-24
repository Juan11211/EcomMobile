const {MongoClient} = require('mongodb');
require('dotenv').config() 

const uri = process.env.MONGO_CONNECTION

const client = new MongoClient(uri);

const database = client.db('test'); // name of collection
const products = database.collection('products'); // name of subcollection

module.exports = { 
    products
}