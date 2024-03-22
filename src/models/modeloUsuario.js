const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')

tb_usuario = connSequelize.define('tb_usuario', {
    cd_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cd_contato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cd_tipoUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nm_usuario:{
        type:DataTypes.TEXT(30),
    } ,
    cd_senha: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_usuario'));

module.exports = {
    tb_usuario
};