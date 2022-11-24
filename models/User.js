const express = require('express');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    role:{
        type: String,
        required:true
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    uniqueId:{
        type: String,
        required: true,
        unique: true
    },
    NIN:{
         type: String,
         required: true
    },
    wardName:{
        type: String,
        required:true  
    },
    gender:{
        type: String,
        required:true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    registrationDate:{
        type: Date,
        required: true
    },
    periodOfStay:{
        type: String, 
        required: false
    },
    residenceType:{
        type: String,
        required: false
    },
    directions:{
        type: String,
        required: false
    },
    
    status: {
        type: String,
        default:"Pending",
        enum:["Pending", "Approved"]
    }

});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'uniqueId'
})

module.exports = mongoose.model("Registration", userSchema);
