const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const Modelcidade = connectionDataBase.define('tb_cidade', {
    id_cidade: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nm_cidade: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    sg_estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  _padraoTableDBExistence('tb_cidade')
  );
  
module.exports = {
    Modelcidade
}