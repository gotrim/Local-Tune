const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const ModelArquivosPostagem = connectionDataBase.define('tb_arquivosPostagem', {
    id_arquivos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    img_postagem: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
   
    ds_video: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    id_postagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tb_postagemMusico',
            key: 'id_postagem'
        },
    }
},
_padraoTableDBExistence('tb_arquivosPostagem')
);

module.exports = {
    ModelArquivosPostagem
}