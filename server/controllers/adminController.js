// const Admin = require('../models/adminmodel')

//Admin will do the CRUD operations

//login admin
const loginadmin = async (req, res) => {
  res.json({message: 'login admin'})
}

//admin dashboard
const dashboard = async (req, res) => {
  res.json({message: 'admin dashboard'})
}

//admin profile
const profile = async (req, res) => {
  res.json({message: 'admin profile'})
}

module.exports = {
  loginadmin,
  dashboard,
  profile
}