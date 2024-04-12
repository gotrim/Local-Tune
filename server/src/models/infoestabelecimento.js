const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');
const ModelInfoEstabelecimento = connectionDataBase.define('tb_infoEstabelecimento', {
    id_infoestabelecimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      references: {
        model: 'tb_infoEstabelecimento',
        key: 'id_estabelecimento',
      },
    },
    nm_logradouro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cd_cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    nm_bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    nmr_casa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      txt_complemento: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_cidade: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tb_cidade',
          key: 'id_cidade',
        },
      },
    },
        _padraoTableDBExistence('tb_infoEstabelecimento')
    );
    module.exports = {
        ModelInfoEstabelecimento
    }