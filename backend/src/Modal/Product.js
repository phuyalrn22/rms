const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Must be greater than 3"],
  },
  description: {
    type: String,
    required: true,
    min: [3, "Must be greater than 3"],
  },
  imageUrl: {
    type: String,
    required: true,
    min: [3, "Must be greater than 3"],
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
