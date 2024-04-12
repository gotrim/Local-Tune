const { DataTypes } = require('sequelize')
const { connectionDataBase } = require('../../config/bdConnection')
const { _padraoTableDBExistence } = require('../../config/configTablesDB')

const ModelAvaliacao = connectionDataBase.define('tb_avaliacao', {
    id_avaliacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    ds_comentario: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_postagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_postagemMusico',
            key: 'id_postagem'
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_usuario',
            key: 'id_usuario'
        }
    },
    cd_like: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
_padraoTableDBExistence('tb_avaliacao')
);

module.exports = {
    ModelAvaliacao
}