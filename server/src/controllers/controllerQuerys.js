const { Model, Op, Sequelize } = require("sequelize");
const { raw } = require("mysql2");
const {
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
  Modelusuario,
} = require("../models/index");

module.exports = {
  findEmailCliente: async (req, res) => {
    const { cd_emailUsuario } = req.params;
    return Modelusuario.findOne({
      attributes: ["cd_emailUsuario", "nmr_telefoneUsuario"],
      raw: true,
      where: {
        cd_emailUsuario: cd_emailUsuario,
      },
    });
  },

  selectCategorias: async (req, res) => {
    return ModelGeneroMusical.findAll({
      attributes: ["ds_genero"],
      order: [["ds_genero", "ASC"]],
      raw: true,
    });
  },

  selectAllUsuarios: async (req, res) => {
    return Modelusuario.findAll({
      attributes: [
        "id_usuario",
        "nm_usuario",
        "cd_emailUsuario",
        "cd_cpfUsuario",
        "nmr_telefoneUsuario",
        "img_Usuario",
      ],
      group: ["nm_usuario", "id_usuario"],
      raw: true,
    });
  },
  // Import Sequelize operators

  selectAllestabelecimento: async (req, res) => {
    return Modelestabelecimento.findAll({
      attributes: [
        "id_estabelecimento",
        "cd_cnpj",
        "nm_estabelecimento",
        "nmr_nota",
      ],
      group: ["id_estabelecimento"],
      order: [["nmr_nota", "DESC"]],
      raw: true,
    });
  },

  selectestabelecimentoeinfo: async (req, res) => {
    return Modelestabelecimento.findAll({
      raw: true,
      include: [
        {
          model: ModelInfoEstabelecimento,
          raw: true,
        },
      ],
    });
  },
  selectPostInfo: async (req, res) => {
    return ModelPostagemMusico.findAll({
      attributes: [
        "ds_titulo",
        "ds_descricao",
        [Sequelize.col("tb_musico.nm_musico"), "musico_nome"],
      ],
      include: [
        {
          model: Modelmusico,
        },
        {
          model: ModelAvaliacao,
          attributes: ["id_avaliacao", "ds_comentario"], // Example columns to select
          required: false,
          include: [
            {
              model: Modelusuario,
              attributes: ["nm_usuario"], // Seleciona o nome do usuário
            },
          ],
        },
      ],
      raw: true,
    });
  },

  selectInfoEstabelecimento: async (req, res) => {
    return Modelestabelecimento.findAll({
        attributes: [
            "id_estabelecimento",
            "cd_cnpj",
            "nm_estabelecimento",
            "nmr_nota",
        ],
        include: [{
            model: ModelInfoEstabelecimento,
            as: 'tb_infoEstabelecimento',
            attributes: [
                ['cd_cep', 'cep'], 
                ['nm_bairro', 'nm_bairro'], 
                ['nm_logradouro', 'nm_logradouro'],
                ['nmr_casa', 'nmr_casa']
            ]
        }],
        raw: true,
        order: [['id_estabelecimento', 'ASC']],
        group: ['id_estabelecimento'], // Adicionando o groupBy
    });
},

};
