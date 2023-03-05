const { Schema, default: mongoose } = require("mongoose");

const clientSchema = new Schema({
  fName: String,
  lName: String,
  mName: String,
  namePrefix: String,
  age: Number,
  birthday: String,
  homeAddress: String,
  currentAddress: String,
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
