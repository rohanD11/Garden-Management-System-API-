const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Landscape Title"],
    maxlength: 30,
  },
  type: {
    type: String,
    required: [true, "Plese provide service type"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the service Description"],
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("service", ServiceSchema);
