const { ModelArquivosPostagem } = require("./arquivos");
const { ModelAvaliacao } = require("./avaliacaoPostagem");
const { Modelcidade } = require("./cidade");
const { Modelestabelecimento } = require("./estabelecimento");
const { ModelGeneroEscolhidoMusico } = require("./generoEscolhidoMusico");
const { ModelGeneroEscolhido } = require("./generoEscolhido");
const { ModelGeneroMusical } = require("./generoMusical");
const { ModelInfoEstabelecimento } = require("./infoestabelecimento");
const { Modelmusico } = require("./musico");
const { ModelPostagemMusico } = require("./postagem");
const { Modelusuario } = require("./usuario");

// Relações corrigidas
Modelestabelecimento.hasOne(ModelInfoEstabelecimento, { foreignKey: 'id_estabelecimento' });
ModelInfoEstabelecimento.belongsTo(Modelestabelecimento, { foreignKey: 'id_estabelecimento' });

Modelcidade.hasMany(ModelInfoEstabelecimento, { foreignKey: 'id_cidade' });
ModelInfoEstabelecimento.belongsTo(Modelcidade, { foreignKey: 'id_cidade' });

Modelusuario.hasMany(ModelGeneroEscolhido, { foreignKey: 'id_usuario' });
ModelGeneroEscolhido.belongsTo(Modelusuario, { foreignKey: 'id_usuario' });

Modelmusico.hasMany(ModelGeneroEscolhidoMusico, { foreignKey: 'id_musico' });
ModelGeneroEscolhidoMusico.belongsTo(Modelmusico, { foreignKey: 'id_musico' });


ModelGeneroMusical.hasMany(ModelGeneroEscolhidoMusico, {foreignKey: 'id_genero'})
ModelGeneroEscolhidoMusico.belongsTo(ModelGeneroMusical, {foreignKey: 'id_genero'})

ModelGeneroMusical.hasMany(ModelGeneroEscolhido, {foreignKey: 'id_genero'})
ModelGeneroEscolhido.belongsTo(ModelGeneroMusical, {foreignKey: 'id_genero'})



Modelmusico.hasMany(ModelPostagemMusico, { foreignKey: 'id_musico' });
ModelPostagemMusico.belongsTo(Modelmusico, { foreignKey: 'id_musico' });

ModelPostagemMusico.hasMany(ModelAvaliacao, { foreignKey: 'id_postagem' });
ModelAvaliacao.belongsTo(ModelPostagemMusico, { foreignKey: 'id_postagem' });


Modelusuario.hasMany(ModelAvaliacao, {foreignKey:'id_usuario'})
ModelAvaliacao.belongsTo(Modelusuario, {foreignKey:'id_usuario'})

ModelPostagemMusico.hasMany(ModelArquivosPostagem, { foreignKey: 'id_postagem' });
ModelArquivosPostagem.belongsTo(ModelPostagemMusico, { foreignKey: 'id_postagem' });



module.exports = {
    ModelArquivosPostagem,
    ModelAvaliacao,
    Modelcidade,
    Modelestabelecimento,
    ModelGeneroEscolhidoMusico,
    ModelGeneroEscolhido,
    ModelGeneroMusical,
    ModelInfoEstabelecimento,
    Modelmusico,
    ModelPostagemMusico,
    Modelusuario
};
