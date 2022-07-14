const List = require("../model/List");
const uuid = require("uuid").v4;

//controller of create a list
exports.createList = async (req, res) => {
  await List.create(req.body)
    .then((result) =>
      res
        .status(201)
        .json({ success: true, message: "لیست با موفقیت ساخته شد" })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "ظاهرا مشکلی رخ داده است" });
    });
};

exports.editList = async (req, res) => {
  const { id, listName, description } = req.body;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, message: "لیست مورد نظر یافت نشد." });
  }
  await List.findByIdAndUpdate(id, { listName, description })
    .then((result) =>
      res
        .status(202)
        .json({ success: true, message: "لیست با موفقیت آپدیت شد." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا مشکلی رخ داده است." });
    });
};

exports.deleteList = async (req, res) => {
  await List.findByIdAndDelete(req.body.id)
    .then((result) =>
      res
        .status(200)
        .json({ success: true, message: "لیست با موفقیت حذف گردید." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "طاهرا مشکلی رخ داده است." });
    });
};

exports.readLists = async (req, res) => {
  await List.find({})
    .then((result) => res.status(200).json({ success: true, data: result }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "مشکی در دریافت اطلاعات پیش آمده است.",
      });
    });
};

exports.readaList = async (req, res) => {
  await List.findById(req.params.id)
    .then((result) => res.status(200).json({ success: true, data: result }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "مشکلی در دریافت اطلاعات پیش آمده است.",
      });
    });
};
