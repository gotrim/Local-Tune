const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');
const ModelGeneroMusical = connectionDataBase.define('tb_generoMusical', {
    id_genero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    ds_genero: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
_padraoTableDBExistence('tb_generoMusical')
);
module.exports = {
    ModelGeneroMusical
}