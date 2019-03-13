const express = require('express');
const cors = require("cors");
const bp = require("body-parser");
const router = require("router");
const mongoose = require("mongoose");
const contactsroute = require("./contacts/router")
const app = express();
// const rou = require("./contacts/router");
app.use(bp.json())
mongoose.connect("mongodb://localhost:27017/contacts");
mongoose.connection.on("connected",()=>{
 console.log("connected");   
})
app.use(cors());
app.use("/contacts",contactsroute)


app.listen(3001,(req,res)=>{
    console.log("connected");
})


