const {ModeTipoMusica} = require('../config/models/modeloTipoMusica.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const TiMusic = await ModeTipoMusica.findAll({ raw: true });
        return TiMusic;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeTipoMusica.findByPk(req.params.id, { raw: true });
    }
};