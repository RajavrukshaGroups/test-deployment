const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController.js");

router.post("/contact", UserController.UserData);

module.exports = router;
