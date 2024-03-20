const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();

// Configurações de conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_teste',
  port: 3307
});

// Conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

app.use(express.urlencoded({ extended: true }));

// Rota para renderizar o formulário de cadastro
app.get('/register', (req, res) => {
  res.render('register');
});

// Rota para processar o formulário de cadastro
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Geração do hash da senha
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Inserção do usuário no banco de dados
  connection.query(
    'INSERT INTO tb_usuário (username, password) VALUES (?, ?)',
    [username, hashedPassword],
    (err, results) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).send('Erro ao cadastrar usuário');
        return;
      }
      console.log('Usuário cadastrado com sucesso');
      res.redirect('/success'); // Redireciona para página de sucesso
    }
  );
});

// Rota para exibir mensagem de sucesso
app.get('/success', (req, res) => {
  res.send('Usuário cadastrado com sucesso!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
