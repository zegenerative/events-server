const express = require('express')
const app = express()
// const db = require('./db')
const Model = require('./event/model')
const cors = require('cors')
const router = require('./event/router')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.use(corsMiddleware)
app.use(jsonParser)
app.use(router)

const port = process.env.PORT || 4000

// app.use(db, Model)

function listenOnPort() {
    console.log(`Listening on port: ${port}`)
}

app.listen(port, listenOnPort)