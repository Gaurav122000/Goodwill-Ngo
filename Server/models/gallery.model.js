const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    tag:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Gallery' , gallerySchema);