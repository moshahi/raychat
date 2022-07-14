const express = require("express"),
  app = express();
require("dotenv").config();
const { connectdb } = require("./config/connectDB");

connectdb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/list", require("./routes/lists"));
app.use("/todo", require("./routes/todo"));

app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
