const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');
const ModelPostagemMusico = connectionDataBase.define('tb_postagemMusico', {
    id_postagem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    ds_titulo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ds_descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_musico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_musico',
            key: 'id_musico'
        }
    }
},
_padraoTableDBExistence('tb_postagemMusico')
);
module.exports = {
    ModelPostagemMusico
}