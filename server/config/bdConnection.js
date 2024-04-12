const { password, name, usu } = require("./connectInfo.js")
const { Sequelize, QueryTypes } = require("sequelize")



const connectionDataBase = new Sequelize(
    `mysql://${usu}:${password}@localhost:3307/${name}`
)


module.exports = { connectionDataBase }
