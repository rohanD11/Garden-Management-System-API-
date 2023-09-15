const mongoose = require("mongoose");

const PlantsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Plant Title"],
    maxlength: 30,
  },
  type: {
    type: String,
    required: [true, "Please Provide Plant Type"],
  },
  description: {
    type: String,
    required: [true, "Please Provide Plant Description"],
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("Plant", PlantsSchema);
