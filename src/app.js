const express = require('express');
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
app.use(express.json()); // ✅ middleware to parse JSON body

// POST /signup route
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.send("User added successfully");
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

app.patch("/user", async (req,res)=>{
     const userId = req.body.userId;
     const data = req.body;
     console.log(data); 

     try{
     
      await User.findByIdAndUpdate( {_id :userId},data)
     res.send("user up[dated sussefylly")
    
    }catch (err){
      console.log(err)
              res.status(404).send("someting went wrong");

     }
  })
  


// Connect DB and start server
connectDB()
  .then(() => {
    console.log('Database connection established!');
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed!", err);
  });
