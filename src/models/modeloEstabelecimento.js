const { connSequelize } = require('./config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('./config/confdobanco')

Estabelecimento = conecSequelize.define('tb_estabelecimento', {
    cd_estabelecimento: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_tipoMusical: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cd_cnpj: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_estabelecimento'));
module.exports = {
    Estabelecimento
};