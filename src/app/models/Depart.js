const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Depart = new Schema({
    ID: {type: String, maxLength: 255},
    department: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 600 },
    phone: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('Depart', Depart, 'department');