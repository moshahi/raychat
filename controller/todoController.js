const Todo = require("../model/Todo");

exports.addTodo = async (req, res) => {
  await Todo.create(req.body)
    .then((result) =>
      res
        .status(201)
        .json({ success: true, message: "تسک با موفقیت ساخته شد." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا خطایی رخ داده است" });
    });
};

exports.editTodo = async (req, res) => {
  const { todoText, list, position, completed, id } = req.body;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, message: "تسک مورد نظر یافت نشد." });
  }
  await Todo.findByIdAndUpdate(id, {
    todoText,
    list,
    position,
    completed,
  })
    .then((result) =>
      res.status(200).json({ success: true, message: "تسک با موفقیت ادیت شد." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا خطایی رخ داده است" });
    });
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.body.id)
    .then((result) =>
      res.status(200).json({ success: true, message: "تسک با موفقیت حذف شد." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا خطایی رخ داده است" });
    });
};

exports.getTodos = async (req, res) => {
  await Todo.find({})
    .then((result) => res.status(200).json({ success: true, data: result }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا خطایی رخ داده است" });
    });
};

exports.getaTodo = async (req, res) => {
  await Todo.findById(req.body.id)
    .then((result) => res.status(200).json({ success: true, data: result }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا خطایی رخ داده است" });
    });
};
