const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  status: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  seatId: {
    type: mongoose.Types.ObjectId,
    ref: "Seat",
  },
});

module.exports = mongoose.model("Order", orderSchema);
