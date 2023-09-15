const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Project Title"],
    maxlength: 30,
  },
  description: {
    type: String,
    required: [true, "Please Provide Project Description"],
  },
  time: {
    type: String,
    required: [true, "Please Enter time Period of the project"],
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("Project", ProjectSchema);
