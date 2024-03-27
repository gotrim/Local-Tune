const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco.js')
 
tb_usuario = connSequelize.define('tb_usuario', {
    cd_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nm_usuario:{
        type:DataTypes.TEXT(30),
        allowNull: false
    } ,
    nm_email: {
        type:DataTypes.TEXT(70),
        allowNull: false
    },
    cd_senha: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_usuario'));
 
module.exports = {
    tb_usuario
};