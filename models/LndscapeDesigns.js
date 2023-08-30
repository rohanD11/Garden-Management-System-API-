const mongoose = require("mongoose");

const LandscapeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Landscape Title"],
    maxlength: 30,
  },
  description: {
    type: String,
    required: [true, "Please Provide Landscape Description"],
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("LandScapeDesign", LandscapeSchema);
