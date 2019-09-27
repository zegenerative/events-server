const express = require('express')
const app = express()
const db = require('./db')

const port = process.env.PORT || 4000

function listenOnPort() {
    console.log(`Listening on port: ${port}`)
}

app.listen(port, listenOnPort)