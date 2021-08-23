const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: String,
  image: String,
  family: String,
  kingdom: String,
  description: String,
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
