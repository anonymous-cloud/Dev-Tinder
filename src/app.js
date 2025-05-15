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
