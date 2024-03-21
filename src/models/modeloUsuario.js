const { connSequelize } = require('../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../config/confdobanco')

Usuario = conecSequelize.define('tb_usuario', {
    cd_usuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_endereco: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cd_contato: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cd_tipoUsuario:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    nm_usuario:{
        type:DataTypes.TEXT(30),
    } ,

    cd_estabelecimento: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    cd_senha: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_usuario'));

module.exports = {
    Usuario
};