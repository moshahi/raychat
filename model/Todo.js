const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todoText: { type: String, required: true },
  completed: { type: Boolean, default: false },
  list: { type: mongoose.Types.ObjectId, ref: "List" },
  position: {
    type: Number,
    required: true,
    unique: [
      true,
      "این جایگاه اشغال میباشد ابتدا جایگاه اشغالی را ویرایش کنید",
    ],
  },
  createdAt: { type: Date, default: Date.now() },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
