const {ModeEstabelecimento} = require('../config/models/modeloEstabelecimento.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const Estabelecimento = await ModeEstabelecimento.findAll({ raw: true });
        return Estabelecimento;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeEstabelecimento.findByPk(req.params.id, { raw: true });
    }
};