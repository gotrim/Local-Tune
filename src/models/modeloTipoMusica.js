const { conecSequelize } = require('../config/banco/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('../config/banco/confdobanco')

TiMusic = conecSequelize.define('tb_tipoMusical',{
    cd_tipoMusical:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    ds_descricaoTpMusical:{
        type:DataTypes.TEXT(30),
        allowNull:false
    },
    

}, _padraoTableBDExistence('tb_tipoMusical')
)

module.exports ={
    TiMusic
}