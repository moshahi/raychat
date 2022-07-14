const express = require("express");

const router = express.Router();

const listController = require("../controller/listController");

//@desc create a list
//@route /list/create
router.post("/create", listController.createList);

//@desc update a list
//@route /list/update
router.post("/update", listController.editList);

//@desc delete a list
//@route /list/delete
router.post("/delete", listController.deleteList);

//@desc read all list
//@route /list
router.get("/", listController.readLists);

//@desc read a list
//@route /list/:id
router.get("/:id", listController.readaList);

module.exports = router;
