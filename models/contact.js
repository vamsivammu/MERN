const mongoose = require("mongoose");
const contactcollection = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    }
})

var c = module.exports = mongoose.model("Contact",contactcollection);