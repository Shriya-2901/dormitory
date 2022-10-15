const Student = require('../models/studentmodel')

//login student
const loginStudent = async (req, res) => {
  res.json({message: 'login student'})
}

//student dashboard
const dashboard = async (req, res) => {
  res.json({message: 'student dashboard'})
}

//student profile
const profile = async (req, res) => {
  res.json({message: 'student profile'})
}

module.exports = {
  loginStudent,
  dashboard,
  profile
}