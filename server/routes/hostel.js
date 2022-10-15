const express = require("express");

//controller functions
const { godavari, sindhu, pampa } = require("../controllers/hostelController");

const router = express.Router();

//hostel routes

router.get("/godavari", godavari);
router.get("/sindhu", sindhu);
router.get("/pampa", pampa);
// router.get('/tamraparani', tamraparani)
// router.get('/mahanadi', mahanadi)
/*
...
.
.
.
.
.
*/

module.exports = router;
