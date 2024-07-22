require('dotenv').config()
const express = require('express')
const app = express()
const Port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
  res.send('_nikhil.sharma24_')
})
app.get('/login', (req, res) => {
  res.send('<h1> Welcome to login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})