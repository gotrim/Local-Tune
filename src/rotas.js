const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { tb_usuario } = require('caminho/para/seu/modelo/tb_usuario');

// Rota de login
router.post('/login', async (req, res) => {
    try {
        const { nm_email, cd_senha } = req.body;

        // Buscar usuário pelo e-mail
        const usuario = await tb_usuario.findOne({ where: { nm_email } });

        if (!usuario) {
            return res.status(404).send('Usuário não encontrado.');
        }

        // Comparar a senha informada com a hash salva no banco de dados
        const senhaValida = await bcrypt.compare(cd_senha, usuario.cd_senha);

        if (!senhaValida) {
            return res.status(401).send('Senha inválida.');
        }

        // Login bem-sucedido
        res.send('Login bem-sucedido!');
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send('Erro ao realizar login.');
    }
});

module.exports = router;

const express = require('express');
const app = express();
const loginRoutes = require('caminho/para/seu/arquivo/routes');

app.use(express.json()); // Para parsear JSON no corpo das requisições
app.use('/api', loginRoutes); // Adicione suas rotas ao app

// Inicia o servidor
app.listen(3307, () => {
    console.log('Servidor rodando na porta 3307');
});

//-----------parte de cadastro-----------------


// Defina a rota para o cadastro de usuários
router.post('/register', async (req, res) => {
    try {
        const { nome, email } = req.body;

        // Verifique se o usuário já existe no banco de dados
        const usuarioExistente = await tb_usuario.findOne({ where: { nm_email: email } });

        if (usuarioExistente) {
            return res.status(400).send('Usuário já cadastrado com este e-mail.');
        }

        // Crie uma senha temporária (pode ser substituída por uma entrada do formulário)
        const senha = 'senhaTemporaria';

        // Gere o hash da senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Crie o usuário no banco de dados
        await tb_usuario.create({
            nm_usuario: nome,
            nm_email: email,
            cd_senha: hashedPassword
        });

        res.status(201).send('Usuário cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro no cadastro de usuário:', error);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

// Exporte o roteador
module.exports = router;
