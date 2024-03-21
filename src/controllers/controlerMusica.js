const {ModeUsuario} = require('../config/models/modeloMusico.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const Usuario = await ModeUsuario.findAll({ raw: true });
        return Usuario;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeUsuario.findByPk(req.params.id, { raw: true });
    }
};