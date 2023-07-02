const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Bill = new Schema({
    ID: {type: String, maxLength: 255},
    department: { type: String, maxLength: 255 },
    salesman: { type: String, maxLength: 600 },
    total: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('Bill', Bill, 'dashboard');