const {ModeMusica} = require('../config/models/modeloUsuario.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const Musico = await ModeMusica.findAll({ raw: true });
        return Musico;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeMusica.findByPk(req.params.id, { raw: true });
    }
};