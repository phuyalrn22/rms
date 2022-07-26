const mongoose = require("mongoose");

const seatsSchema = mongoose.Schema({
  label: {
    type: String,
  },
});

module.exports = mongoose.model("Seat", seatsSchema);
