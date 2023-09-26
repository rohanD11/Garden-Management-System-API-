const mongoose = require("mongoose");

const ToolSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter tool Name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please Enter PhoneNumber"],
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
  items: [
    {
      itemName: {
        type: String,
        required: true,
      },
      itemId: {
        type: String,
        required: true,
      },
      cost: {
        type: String,
        required: true,
      },
    },
  ],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide Service ID"],
  },
});

module.exports = mongoose.model("tool", ToolSchema);
