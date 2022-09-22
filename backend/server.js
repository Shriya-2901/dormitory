const express = require('express')
require('dotenv').config()
const studentRoutes = require('./routes/student')
const adminRoutes = require('./routes/admin')
const hostelRoutes = require('./routes/hostel')

const app = express()

// app.use(express.json)

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/student', studentRoutes)
app.use('/admin', adminRoutes)
app.use('/hostel', hostelRoutes)

app.get('/', (req, res) => {
  res.json({mssg: 'Welcome'})
})

app.listen(process.env.PORT, () => {
  console.log('Listening at port', process.env.PORT)
})