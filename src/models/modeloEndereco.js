const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')

tb_endereco = connSequelize.define('tb_endereco', {
    cd_endereco: {
        type: DataTypes.INTEGER,
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
    tb_endereco
};