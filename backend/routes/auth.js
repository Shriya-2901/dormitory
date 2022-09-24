const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.get("/signin", authController.signin);
router.get("/verify", authController.verify);

module.exports = router;