const express = require("express");

//controller functions
const {
  loginStudent,
  dashboard,
  profile,
} = require("../controllers/studentController");

const router = express.Router();

//login route
router.get("/login", loginStudent);

//dashboard route
router.get("/dashboard", dashboard);

//profile route
router.get("/profile", profile);

module.exports = router;
