const { connSequelize } = require('../../config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../../config/confdobanco')
const { tb_tipoMusical } = require('./modeloTipoMusica');

tb_estabelecimento = connSequelize.define('tb_estabelecimento', {
    cd_estabelecimento: {
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
    cd_cnpj: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, _padraoTableBDExistence('tb_estabelecimento'));

tb_estabelecimento.hasMany(tb_tipoMusical, {foreignKey: 'cd_estabelecimento'});
tb_tipoMusical.belongsTo(tb_estabelecimento, {foreignKey: 'cd_estabelecimento'});

module.exports = {
    tb_estabelecimento
};