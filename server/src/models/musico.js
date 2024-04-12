const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

const Modelmusico = connectionDataBase.define('tb_musico', {
    id_musico: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nm_musico: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cd_emailMusico: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    cd_cpfMusico: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    nmr_telefoneMusico: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    img_Musico: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
  },
    _padraoTableDBExistence('tb_musico')
  );

  module.exports = {
    Modelmusico
}