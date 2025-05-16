const express = require('express');
const connectDB = require("./config/database");
const User = require("./models/user");
 const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // ✅ middleware to parse JSON body

// POST /signup route
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.status(201).send("User added successfully");
  } catch (error) {
    

    console.error("Signup error:", error);
    res.status(500).send("Internal Server Error");
  }
});
// get user by email
app.get("/user", async (req,res)=>{
  try{
    const userEmail = req.body.emailId;
    console.log(userEmail)
  const users =  await User.find({}).sort({emailId : -1})
   console.log(users)
  res.send(users)
  }catch(error){
        console.log(error)
        res.status(404).send("someting went wrong");

  }

  

})

app.patch("/user/:userId", async (req,res) => {
   const userId = req.params?.userId;
   console.log(userId, "abc")
const data = req.body;
console.log(data)
  
try{

  const ALLOWED_UPDATE = ["lastName","gender","age","skills"];
  const isUpdateAllowed = Object.keys(data).every((k)=>
         ALLOWED_UPDATE.includes(k)
  );

  if(!isUpdateAllowed){
    throw new Error("update not allowed");
  }
   if(Array.isArray(data.skills) && data.skills.length > 10){
    throw new Error("skills cannot be more than 10");
   }

 const userDetail= await User.findByIdAndUpdate( userId,data,{ new: true ,runValidators:true,});
  console.log(userDetail);
  res.send("user updated successfully");
}
catch (err){
  console.log(err)
  res.status(404).send("someting went wrong");
}

}) ;

// Connect DB and start server
connectDB()
  .then(() => {
    console.log('Database connection established!');
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {new objectId(_id)
    console.error("Database connection failed!", err);
  });
