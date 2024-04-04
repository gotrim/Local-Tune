const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco.js')
const {tb_tipoUsuario} = require ('./modeloTipoUsuario')
const {tb_endereco} = require ('./modeloEndereco')
const { tb_contato } = require('./modeloContato.js')
const { tb_tipoMusical } = require('./modeloTipoMusica.js')
 
const tb_usuario = connSequelize.define('tb_usuario', {
    cd_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_tipoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_tipoUsuario',
            key: 'cd_tipoUsuario'
        }
    },
    nm_usuario:{
        type:DataTypes.TEXT(30),
    } ,
    cd_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_endereco',
            key: 'cd_endereco'
        }
    },
    cd_contato: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_contato',
            key: 'cd_contato'
        }
    },
    cd_tipoMusical: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_tipoMusical',
            key: 'cd_tipoMusical'
        }
    },
    cd_senha: {
        type: DataTypes.STRING(16),
    }
}, _padraoTableBDExistence('tb_usuario'));

tb_tipoUsuario.hasMany(tb_usuario, {foreignKey: 'cd_usuario'});
tb_usuario.belongsTo(tb_tipoUsuario, {foreignKey: 'cd_usuario'});

tb_endereco.hasMany(tb_usuario, {foreignKey: 'cd_usuario'});
tb_usuario.belongsToMany(tb_endereco, {foreignKey: 'cd_usuario'});
 
tb_contato.hasOne(tb_usuario, {foreignKey: 'cd_usuario'});
tb_usuario.belongsTo(tb_contato, {foreignKey: 'cd_usuario'});

tb_tipoMusical.hasMany(tb_usuario, {foreignKey: 'cd_usuario'});
tb_usuario.belongsToMany(tb_tipoMusical, {foreignKey: 'cd_usuario'});

module.exports = {
    tb_usuario
};