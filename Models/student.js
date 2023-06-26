const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    birth: {
        type: Date,
        require: true
    },
    raddress: {
        Street1: {
            type: String,
            require: true
        },
        Street2: {
            type: String,
            require: true
        }
    },
    paddress: {
        Street1: {
            type: String,
            require: true
        },
        Street2: {
            type: String,
            require: true
        }
    },
    UploadDoc:{
        fileName:{
           type:String,
           require:true
        },
        typeOf:{
           type:[String], enum:["image","pdf"],
           require:true
        },
        upload:{
           type:String,
           require:true
        } 
    }

}, { timestamps: true })

module.exports = mongoose.model("Student", studentSchema)