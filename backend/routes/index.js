const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();

const auth = require("./auth");
const dash = require("./dash");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

router.use("/auth", auth);

router.use("/dash", dash);

module.exports = app;