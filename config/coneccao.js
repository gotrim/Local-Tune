const {Sequelize} = require ('sequelize')

const usuario = 'root'
const senha = 'root'
const BD = 'db_test'
const conecSequelize =  new Sequelize(
    `mysql://${usuario}:${senha}@localhost:330y/${BD}`
)

module.exports = {
    conecSequelize,
    BD
}