const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')
const {tb_musico} = require ('./modeloMusico')
const {tb_estabelecimento} = require ('./modeloEstabelecimento')

const tb_tipoUsuario = connSequelize.define('tb_tipoUsuario', {
    cd_tipoUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cd_musico: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tb_musico',
            key: 'cd_musico'
        }
    },
    cd_estabelecimento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tb_estabelecimento',
            key: 'cd_estabelecimento'
        }
    },

}, _padraoTableBDExistence('tb_tipoUsuario'));

tb_tipoUsuario.hasMany(tb_musico, {foreignKey: 'cd_tipoUsuario'});
tb_musico.belongsTo(tb_tipoUsuario, {foreignKey: 'cd_tipoUsuario'});

tb_estabelecimento.hasMany(tb_tipoUsuario, {as:'tb_estabelecimento',foreignKey: 'cd_tipoUsuario'});
tb_tipoUsuario.belongsTo(tb_estabelecimento, {as:'tb_estabelecimento',foreignKey: 'cd_tipoUsuario'});


module.exports = {
    tb_tipoUsuario
};