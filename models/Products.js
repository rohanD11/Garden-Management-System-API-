const mongoose = require("mongoose");
const { schema } = require("./Admin");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter the Product Title"],
    maxlength: 30,
  },
  description: {
    type: String,
    required: [true, "Plese Enter Product Description"],
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
