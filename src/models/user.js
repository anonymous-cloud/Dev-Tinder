const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName :{
        type : String,
        minLength : 3,
        maxLength : 50,
        trim : true,
        required : true,
    },
     lastName :{
        type : String,
        maxLength : 50,
        trim : true,
     },
     emailId:{
        type: String,
        unique : true,
        required : true,
        lowercase : true,
        trim : true,


     },
     password :{
        type: String,
        required : true,
        minLength : 6,
        
     },

     age: {
        type : Number,
     },

     gender : {
        type : String,
        validate(value){
         if(!["male","female","others"].includes(value)){
            throw new Error("Gender data is not valid")
         }
        }
     },

     skills : {
      type : [String],
     }
} , { timestamps: true });

const user  = mongoose.model("user",userSchema);

module.exports = user;