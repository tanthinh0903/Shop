const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
    ID: {type: String, maxLength: 255},
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    quantity: {type: Number},
    price: { type: Number},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('Products', Product, 'products');

