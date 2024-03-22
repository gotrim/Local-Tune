const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')
const {tb_tipo} = require ('./modeloMusico');
const { tb_tipoMusical } = require('./modeloTipoMusica');

tb_musico = connSequelize.define('tb_musico', {
    cd_musico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_tipoMusical: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'tb_tipoMusical',
            key: 'cd_tipoMsuical'
        }
    },
    cd_cpf: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_musico'));

tb_musico.hasMany(tb_tipoMusical, {foreignKey: 'cd_musico'});
tb_tipoMusical.belongsTo(tb_musico, {foreignKey: 'cd_musico'});

module.exports ={
    tb_musico
}