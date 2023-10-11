var express = require("express");
const { getAllUsers, getSingleUser } = require("../controller/get-users");
var router = express.Router();

/* GET users listing. */
router.get("/all", getAllUsers);
router.get("/single/:id", getSingleUser);

module.exports = router;
