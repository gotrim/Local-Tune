const { Sequelize } = require('sequelize')

const usuario = 'root'
const senha = 'root'
const nmBD = 'bd_test'
// mudar o local host e colocar a entrada da sua casa
const connSequelize = new Sequelize(
    `mysql://${usuario}:${senha}@localhost:3307/${nmBD}`
)

module.exports = {
    nmBD,
    connSequelize
}
