const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
require("dotenv").config();


let PORT = process.env.Port;

// const db = process.env.db_atlas;
// mongoose.connect(db).then(() => {
//     console.log('Connected to DB ..... :)');
// }).catch((err) => {
//     console.log(err, 'Not Connected to DB ...... :(');
// });


mongoose.connect("mongodb://127.0.0.1:27017/NGO_Site_2").then(() => {
    console.log('Connected to DB ..... :)');
}).catch((err) => {
    console.log(err, 'Not Connected to DB ...... :(');
});

const app = express()
app.use(express.json())
app.use(cors())

//setting up routes & requiring the initroutes function
require('./routes/web')(app)

app.listen(PORT, ()=> {
    console.log(`Server is Running on ${PORT} ....... :) Yeah Buddy`)
})