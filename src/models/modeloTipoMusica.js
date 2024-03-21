const { connSequelize } = require('./config/coneccao')
const { DataTypes} = require ('sequelize')
const { _padraoTableBDExistence } = require('./config/confdobanco')

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