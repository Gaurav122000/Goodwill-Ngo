const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required: true
    },
},{timestamps:true})

module.exports = mongoose.model('blog', blogSchema);