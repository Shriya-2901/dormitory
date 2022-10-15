const express = require('express')

require('dotenv').config()

const app = express()

// app.use(express.json)

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use("/", require("./routes"));

// app.use('/student', studentRoutes)
// app.use('/admin', adminRoutes)
// app.use('/hostel', hostelRoutes)
require("./config/mongoConnection");

app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome' })
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Listening at port', process.env.PORT || 4000)
})