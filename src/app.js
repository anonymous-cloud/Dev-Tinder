const express = require('express');
const app = express();
const PORT = 3000;

const connectDB = require("./config/database")




app.listen(PORT , () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
