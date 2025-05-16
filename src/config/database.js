 const mongoose = require("mongoose");

 const connectDB = async()=>{
    try {
            await mongoose.connect("mongodb+srv://abhishekPratap12:1234@cluster0.b55ht8m.mongodb.net/");
           console.log("MongoDB connected");
    }
  
     catch (error) {
    console.error("MongoDB connection error:", error);
    
  }  

 };

 

 module.exports = connectDB;
 

 