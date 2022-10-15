const User = require("../models/studentmodel");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const iterations = require("../Utils/index").iterations;

const adminList = require("../Utils/index").ADMINLIST;
const Roles = require("../Utils/index").ROLES;

module.exports.signup = async (req, res) => {
  console.log(adminList);

  const roles = adminList.includes(req.body.email) ? Roles.ADMIN : Roles.USER;
  console.log(roles);
  await User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, iterations),
      hostel: req.body.hostel,
      rollNo: req.body.rollNo,
      role: roles,
    },
    function (err, user) {
      if (err)
        return res
          .status(500)
          .send("There was a problem registering the user." + err);
      // create a token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY || "secret",
        {
          expiresIn: 86400, // expires in 24 hours
        }
      );
      res.status(200).send({ auth: true, token: token });
    }
  );
};

module.exports.signin = async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((user) => {
      var passwordIsValid = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) return res.status(401).send("Invalid Credentials");
      let token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY || "secret"
      );
      return res.status(200).send({
        loginStatus: true,
        id: user._id,
        role: user.role,
        jwtToken: token,
      });
    })
    .catch((e) => res.status(500).send("Error in finding User: " + e));
};

module.exports.me = async function (req, res) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(
    token,
    process.env.JWT_SECRET_KEY || "secret",
    function (err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });

      User.findById(decoded.id, { password: 0 }, function (err, user) {
        if (err)
          return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
      });
    }
  );
};

module.exports.getUsers = async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((user) => {
      var passwordIsValid = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) return res.status(401).send("Invalid Credentials");

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY || "secret",
        {
          expiresIn: 86400, // expires in 24 hours
        }
      );
      return res.status(200).send({
        loginStatus: true,
        id: user._id,
        role: user.role,
        jwtToken: token,
      });
    })
    .catch((e) => res.status(500).send("Error in finding User: " + e));
};
module.exports.verify = async (req, res) => {
  let token = req.headers["x-access-token"];
  // console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY || "secret", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
        decodedId: null,
      });
    }
    return res.status(200).send({
      message: "Authorised!",
      decodedId: decoded,
    });
  });
};

module.exports.logout = async function (req, res) {
  let randomNumberToAppend = toString(Math.floor(Math.random() * 1000 + 1));
  let randomIndex = Math.floor(Math.random() * 10 + 1);
  let hashedRandomNumberToAppend = await bcrypt.hash(randomNumberToAppend, 10);

  // now just concat the hashed random number to the end of the token
  req.token = req.token + hashedRandomNumberToAppend;
  return res.status(200).json("logout");
};
