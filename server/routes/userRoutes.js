const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserProfile,
  authUser,
} = require("../controllers/userControllers");

router.route("/").get(getUsers);
router.route("/:id").get(getUserProfile);
router.route("/login").post(authUser);

module.exports = router;
