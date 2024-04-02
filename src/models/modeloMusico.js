const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')

const tb_musico = connSequelize.define('tb_musico', {
    cd_musico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_cpf: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_musico'));

module.exports ={
    tb_musico
}