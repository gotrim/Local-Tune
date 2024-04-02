const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')

const tb_estabelecimento = connSequelize.define('tb_estabelecimento', {
    cd_estabelecimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_cnpj: {
        type: DataTypes.CHAR(18),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_estabelecimento'));

module.exports = {
    tb_estabelecimento
};