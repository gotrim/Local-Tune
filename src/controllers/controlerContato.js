const {ModeContato} = require('../config/models/modeloContato.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const Contato = await ModeContato.findAll({ raw: true });
        return Contato;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeContato.findByPk(req.params.id, { raw: true });
    }
};