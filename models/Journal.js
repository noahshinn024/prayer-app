const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  header: {
    type: String,
    default: "Untitled",
  },
  body: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Journal = mongoose.model("journal", journalSchema);
