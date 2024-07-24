const express = require("express");
const router = express.Router();
const { getUsers, getUserProfile } = require("../controllers/userControllers");

router.route("/").get(getUsers);
router.route("/:id").get(getUserProfile);

module.exports = router;
