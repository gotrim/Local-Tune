const {Modeassociacoes} = require('../config/models/associacoes.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const associacoes = await Modeassociacoes.findAll({ raw: true });
        return associacoes;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await Modeassociacoes.findByPk(req.params.id, { raw: true });
    }
};