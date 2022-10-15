const express = require("express");

//Admin will do the CRUD operations

//controller functions
const {
  loginadmin,
  dashboard,
  profile,
} = require("../controllers/adminController");

const router = express.Router();

//login route
router.get("/login", loginadmin);

//dashboard route
router.get("/dashboard", dashboard);

//profile route
router.get("/profile", profile);

module.exports = router;
