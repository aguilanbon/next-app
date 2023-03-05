require("dotenv").config();
const { default: mongoose } = require("mongoose");
const express = require("express");
const Client = require("../models/client");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

// Define your routes
app.get("/", async (req, res) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving clients");
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3000");
});
