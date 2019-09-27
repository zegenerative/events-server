const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:zeger@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
    .sync()
    .then(console.log('Database connected :P'))
    .catch(console.error)

module.exports = db