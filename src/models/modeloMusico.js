const { connSequelize } = require('./config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('./config/confdobanco')

Musico = conecSequelize.define('tb_musico', {
    cd_musico: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_tipoMusical: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cd_cpf: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_musico'));

module.exports ={
    Musico
}