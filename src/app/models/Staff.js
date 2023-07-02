const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Staff = new Schema({
    ID: { type: String, maxLength: 255 },
    name: { type: String, maxLength: 255 },
    shift: { type: String, maxLength: 255 },
    depart: { type: String, maxLength: 255 },
    salary: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 255 },
    gender: { type: String, maxLength: 255 },
    birthday: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
})

module.exports = mongoose.model('Staff', Staff, 'staff');