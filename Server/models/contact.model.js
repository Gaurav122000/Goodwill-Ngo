const mongoose = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');
//Initialize autoIncrement
const AutoIncrement = AutoIncrementFactory(mongoose);

const contactSchema = new mongoose.Schema({
    ticketId:{
        type: Number,
        index: true
    },

    active:{
        type: Boolean,
        default: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    subject:{
        type:String,
        required:true
    },

    message: {
        type: String,
        required: true
    }
},{timestamps:true})

contactSchema.plugin(AutoIncrement, {inc_field: 'ticketId'});

module.exports = mongoose.model('Contact-Us', contactSchema);