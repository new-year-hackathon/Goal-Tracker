'use strict'

const express = require('express')
const {db} = require('./db')
const app = express()
const PORT = process.env.PORT || 1337

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })
