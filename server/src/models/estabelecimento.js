const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const Modelestabelecimento = connectionDataBase.define('tb_estabelecimento', {
    id_estabelecimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cd_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    nm_estabelecimento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nmr_nota: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
},
_padraoTableDBExistence('tb_estabelecimento')
);

module.exports = {
    Modelestabelecimento
}