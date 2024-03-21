function _padraoTableBDExistence(typedTableNm) {
    return {
        timestamps: false,
        freezeTableName: true,
        tableName: typedTableNm
    }
}

module.exports = { _padraoTableBDExistence }

// mudar o local host e colocar a entrada da sua casa