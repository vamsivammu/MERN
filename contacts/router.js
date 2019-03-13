const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bp = require("body-parser");
const app = express.Router();
const contact = require("../models/contact");
// app.get("/",function(req,res){
//     contact.find(function(err,cont){
//         res.json(cont);
//     })
// })

app.post("/addcontact",function(req,res){
    console.log("getting post request")
    var newcontact = new contact({
        firstname :req.body.firstname,
        lastname :req.body.lastname,
        phonenumber : req.body.phonenumber
    });

console.log(newcontact)
    newcontact.save(function(err,r){
        console.log(err,r)
        if(err){
            res.json({"msg":"error"})
        }else{
            res.json({"msg":"success"})
        }
    })
})
module.exports = app

