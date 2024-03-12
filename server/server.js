const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")
const app = express();
require("dotenv").config();
const port = 5001;
const url = process.env.DATABASE_URL;
app.use(cors());

// Connecting to database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Epistimis' // Specify your desired database name
})
  .then((ans) => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error in the connection process!");
  });

// Defining the Schema
const lawSchema = new mongoose.Schema({
  jurisdiction: {
    type: String,
    required: true,
    unique: true,
  },
  filterCategories: {
    type: Array,
  },
  privacyLaws: {
    type: Array,
  },
  otherPrivacyLaws: {
    type: Array,
  },
});

// Creating a mongoose model
const Laws = mongoose.model("Laws", lawSchema);

// Get information for a single state
app.get("/api/:stateName", (req, res) => {
  const stateName = req.params.stateName;
  console.log(stateName, " gets called!!");
  
  Laws.findOne({jurisdiction: stateName})
  .then((law) => {
    if (!law) {
      return res.json({
        status: "fail",
        message: "No law found for the specified state",
      });
    }

    res.json({
      status: "success",
      message: `API called for state: ${stateName}`,
      data: {
        law,
      },
    });
  })
  .catch((err) => {
    console.error("Error:", err);
    res.json({
      status: "fail",
      message: "Failed to retrieve law information",
    });
  });

});

// Get information for state comparison
app.get("/api/compare/:stateName1/:stateName2", (req, res) => {
  const stateName1 = req.params.stateName1;
  const stateName2 = req.params.stateName2;
  console.log(stateName1, stateName2, " gets called!!");
  
  // Assuming Laws is your mongoose model
  Laws.find({ jurisdiction: { $in: [stateName1, stateName2] } })
    .then((laws) => {
      if (!laws || laws.length === 0) {
        return res.json({
          status: "fail",
          message: "No laws found for the specified states",
        });
      }

      res.json({
        status: "success",
        message: `API called for states: ${stateName1} and ${stateName2}`,
        data: {
          laws,
        },
      });
    })
    .catch((err) => {
      console.error("Error:", err);
      res.json({
        status: "fail",
        message: "Failed to retrieve law information",
      });
    });
});

//Script for production
app.use(express.static("/client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
