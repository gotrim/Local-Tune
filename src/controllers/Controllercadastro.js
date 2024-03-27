const express = require('express');
const router = express.Router();
const app = express();
const bcrypt = require('bcryptjs');
const { tb_usuario } = require('../models/modeloUsuario');


//Rota de cadastro
exports.cadastro = async (req,res) =>{
    console.log(req.body);

    //Verificar se o usuário já existe
    try {
        const usuario = await tb_usuario.findOne({ where: { nm_email } });

            if (usuario) {
                return res.status(404).send('E-mail e Senha inválido');
            }
        if (!usuario) {
            send('E-mail e Senha inválido');
            return res.redirect('/index')
        }
    }
catch (error) {
    console.error('Erro no login:', error);
    res.status(500).send('Erro ao realizar login.');
}
}

// Exporte o roteador 
module.exports = router;