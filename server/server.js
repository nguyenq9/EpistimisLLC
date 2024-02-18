const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
require('dotenv').config()
const port = 5000
const url = process.env.DATABASE_URL;
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  // Check if the connection is successful
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  


app.get("/api", (req, res) => {
    res.json({"test": ["test1", "test2", "test3"]})
})

app.get("/api/:stateName", (req, res) => {
    const stateName = req.params.stateName;
    console.log(stateName, " gets called!!");
    
    res.json({
        status: "success",
        message: `API called for state: ${stateName}`,
    })
});

app.listen(port, () => {console.log("Server is running on port ", port)});

