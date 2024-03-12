function _padraoTableBDExistente(typedTableNm) {
    return {
        timestamps: false,
        freezeTableName: true,
        tableName: typedTableNm
    }
}

module.exports = { _padraoTableBDExistente }

// mudar o local host e colocar a entrada da sua casa