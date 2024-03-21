const {ModeEndereco} = require('../config/models/modeloEndereco.js')

module.exports = {
    ProcTudoDadosRep: async (req, resp) => {
        const Endereco = await ModeEndereco.findAll({ raw: true });
        return Endereco;
    },
    ProcEspecificoDadosRep: async (req, resp) => {
        return await ModeEndereco.findByPk(req.params.id, { raw: true });
    }
};