 const mongoose = require("mongoose");

 const connectDB = async()=>{
 mongoose.connect("mongodb+srv://abhishekPratap12:1234@cluster0.b55ht8m.mongodb.net/Dev-Tinder");

 }

 connectDB().then(()=>{
    console.log('Database connection established..!1')
 }).catch((err) =>{
   console.log('databse connection failed !');
 });
 

 module.exports = connectDB;
 

