const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 4000


app.use(express.json())

app.use(cors())
  .use('/', require('./routes/index'))

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.uxstnqb.mongodb.net/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connect db is success');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()