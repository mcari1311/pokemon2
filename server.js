const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 