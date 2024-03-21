const { conecSequelize } = require('../config/banco/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../config/banco/confdobanco')

const Contato = conecSequelize.define('tb_contato', {
    cd_contato: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nr_Celular: {
        type: DataTypes.STRING(11),
        allowNull: true
    },
    nm_email: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_contato'));
module.exports = {
    Contato
};