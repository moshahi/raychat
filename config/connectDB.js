const mongoose = require("mongoose");
exports.connectdb = () => {
  mongoose
    .connect("mongodb://localhost:27017/raychat")
    .then((result) => console.log(`db connected.`))
    .catch((err) => console.log(err));
};
