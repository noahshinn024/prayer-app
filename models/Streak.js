const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streakSchema = new Schema({
  value: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Streak = mongoose.model("streak", streakSchema);
