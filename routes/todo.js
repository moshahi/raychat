const express = require("express");

const router = express.Router();

const todoController = require("../controller/todoController");

//@desc create a todo
//@route /todo/create
router.post("/create", todoController.addTodo);

//@desc update a todo
//@route /todo/update
router.post("/update", todoController.editTodo);

//@desc delete a todo
//@route /todo/delete
router.post("/delete", todoController.deleteTodo);

//@desc read all todo
//@route /todo
router.get("/", todoController.getTodos);

//@desc read a todo
//@route /todo/:id
router.get("/:id", todoController.getaTodo);

module.exports = router;
