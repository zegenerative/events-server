const express = require('express')
const app = express()
// const db = require('./db')
const Model = require('./event/model')

const port = process.env.PORT || 4000

// app.use(db, Model)

function listenOnPort() {
    console.log(`Listening on port: ${port}`)
}

app.listen(port, listenOnPort)