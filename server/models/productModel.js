const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Mandatory']
    },
    company: {
        type: String,
        require: [true, 'Mandatory']
    },
    price: {
        type: Number,
        require: [true, 'Mandatory']
    },
    image: {
        type: String,
        require: [true, 'Mandatory']
    },
    description: {
        type: String,
        require: [true, 'Mandatory']
    },
    category: {
        type: String,
        require: [true, 'Mandatory']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('product',productSchema)