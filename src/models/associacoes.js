// associacoes.js
const Usuario = require('../src/models/usuario');
const Endereco = require('../src/models/endereco');
const Contato = require('../src/models/contato');
const Musico = require('../src/models/musico');
const Estabelecimento = require('../src/models/estabelecimento');
const TipoMusical = require('../src/models/tipoMusical');

Usuario.belongsTo(Endereco, { foreignKey: 'cd_endereco' });
Usuario.belongsTo(Contato, { foreignKey: 'cd_contato' });
Usuario.belongsTo(Musico, { foreignKey: 'cd_musico' });
Usuario.belongsTo(Estabelecimento, { foreignKey: 'cd_estabelecimento' });
Musico.belongsTo(TipoMusical, { foreignKey: 'cd_tipoMusical' });
Estabelecimento.belongsTo(TipoMusical, { foreignKey: 'cd_tipoMusical' });
