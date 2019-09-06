const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')
const mongoose = require('mongoose')

const app = express()

// connect db
mongoose.connect(config.URL, { useNewUrlParser: true })
    .then(db => console.log('>> Connect DB'))
    .catch(err => err)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// routes
require('./routes')(app)

app.listen(config.PORT, () => {
    console.log('Server on port', config.PORT);
})