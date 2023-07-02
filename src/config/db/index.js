const mongoose = require('mongoose')

async function connect() {
    
    const URI = 'mongodb+srv://thinhntgcs18085:123%40123a@cluster0.tn9yxqv.mongodb.net/';

    try {
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Connect failed !!! `)
    }
    

}

module.exports = { connect };