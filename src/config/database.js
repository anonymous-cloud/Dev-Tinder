 const mongoose = require("mongoose");

 const connectDB = async()=>{
 mongoose.connect("mongodb+srv://abhishekPratap12:1234@cluster0.b55ht8m.mongodb.net/Dev-Tinder");

 }

 

 module.exports = connectDB;
 

 