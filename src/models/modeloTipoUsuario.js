const { connSequelize } = require('./config/coneccao.js')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('./config/confdobanco')

TipoUsuario = conecSequelize.define('tb_tipoUsuario', {
    cd_tipoUsuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
    },
    cd_musico: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    cd_estabelecimento: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },

}, _padraoTableBDExistence('tb_tipoUsuario'));

module.exports = {
    TipoUsuario
};