const mongoose = require('mongoose')

const donateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    donation: {
        type: String,
        required: true
    },

    amount: {
        type: String
    },

    choice: {
        type: String
    },

    pickup: {
        type: String
    }

},{timestamps:true})

module.exports = mongoose.model('Donate', donateSchema);