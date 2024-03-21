const { conecSequelize } = require('../config/banco/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../config/banco/confdobanco')

Endereco = conecSequelize.define('tb_endereco', {
    cd_endereco: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nm_estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nm_cidade: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nm_rua: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nr_rua: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, _padraoTableBDExistence('tb_endereco'));
module.exports = {
    Endereco
};