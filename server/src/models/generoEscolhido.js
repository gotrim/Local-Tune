const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const ModelGeneroEscolhido = connectionDataBase.define('tb_gerenoEscolhido', {
    id_escolha: {
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
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_usuario',
            key: 'id_usuario'
        }
    }
},
_padraoTableDBExistence('tb_gerenoEscolhido')
);

module.exports = {
    ModelGeneroEscolhido
};
