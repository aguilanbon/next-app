const { default: mongoose } = require("mongoose");
const express = require("express")


const app = express()

mongoose.connect('mongodb://localhost/27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3000');
});