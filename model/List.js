const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  listName: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
