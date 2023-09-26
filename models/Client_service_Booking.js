const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  serviceID: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide Service ID"],
  },
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxlength: 30,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please Enter Your Phone No"],
  },
  streetAddress: {
    type: String,
    required: [true, "Please Enter your streetAddress "],
  },
  postbox: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  amount_payable: {
    type: String,
  },
});

module.exports = mongoose.model("clientService", ServiceSchema);
