const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");//from one origin to another origin, or from one port to another port
require("dotenv").config();
const Razorpay = require('razorpay');



// MongoDB ATLAS Connection

let PORT = process.env.Port;

const db = process.env.db_atlas;
mongoose.connect(db).then(() => {
    console.log('Connected to DB ..... :)');
}).catch((err) => {
    console.log(err, 'Not Connected to DB ...... :(');
});


// mongoose.connect("mongodb://127.0.0.1:27017/NGO_Site_2").then(() => {
//     console.log('Connected to DB ..... :)');
// }).catch((err) => {
//     console.log(err, 'Not Connected to DB ...... :(');
// });

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//setting up routes & requiring the initroutes function
require('./routes/web')(app)

app.listen(PORT, ()=> {
    console.log(`Server is Running on ${PORT} ....... :) Yeah Buddy`)
})

// //razor pay
// const instance = new Razorpay({
//     key_id: process.env.Razor_Key_id,
//     key_secret: process.env.Razor_Key_secret,
// });

//module.exports = instance;


