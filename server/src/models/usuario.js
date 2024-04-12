const { DataTypes } = require('sequelize');
const { connectionDataBase } = require('../../config/bdConnection');
const { _padraoTableDBExistence } = require('../../config/configTablesDB');

// tb_usuario Model
const Modelusuario = connectionDataBase.define('tb_usuario', {
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nm_usuario: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  cd_emailUsuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  cd_cpfUsuario: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true,
  },
  nmr_telefoneUsuario: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true,
  },
  img_Usuario: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
},
_padraoTableDBExistence('tb_usuario')
);
module.exports = {
    Modelusuario
}