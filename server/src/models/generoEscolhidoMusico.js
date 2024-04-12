const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const ModelGeneroEscolhidoMusico = connectionDataBase.define('tb_gerenoEscolhidoMusico', {
    id_escolhaMusico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_generoMusical',
            key: 'id_genero'
        }
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
_padraoTableDBExistence('tb_gerenoEscolhidoMusico'));

module.exports = {
    ModelGeneroEscolhidoMusico
};
