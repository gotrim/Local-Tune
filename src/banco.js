const express = require('express'); // Importa o framework Express
const mysql = require('mysql'); // Importa o módulo MySQL
const bcrypt = require('bcryptjs'); // Importa a biblioteca bcrypt para hash de senhas
const session = require('express-session'); // Importa o middleware express-session para gerenciamento de sessão

const app = express(); // Cria uma instância do aplicativo Express

const connection = mysql.createConnection({
    host: 'localhost', // Host do MySQL
    user: 'root', // Nome de usuário do MySQL
    password: 'root', // Senha do MySQL
    database: 'bd_test.sql', // Nome do banco de dados MySQL
  });
  
connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
      return;
    }
    console.log('Conectado ao MySQL');
  });
  

app.post('add-')

// Configurações do Express
app.set('view engine', 'ejs'); // Configura o mecanismo de visualização para EJS
app.use(express.urlencoded({ extended: true })); // Middleware para decodificar dados de formulário
app.use(express.static('public')); // Middleware para servir arquivos estáticos
app.use(
  session({
    secret: 'segredo', // Segredo usado para assinar a sessão
    resave: false, // Evita regravar a sessão se nada foi modificado
    saveUninitialized: false, // Não salva sessões não inicializadas
  })
);

// Rota para a página de registro
app.get('/register', (req, res) => {
  res.render('register'); // Renderiza o arquivo register.ejs para exibir o formulário de registro
});

// Rota para processar o cadastro
app.post('/register', async (req, res) => {
  const { username, password } = req.body; // Extrai os dados do formulário

  // Hash da senha
  const hashedPassword = bcrypt.hashSync(password, 10); // Gera o hash da senha

  // Inserir usuário no banco de dados
  connection.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword],
    (err, results) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.redirect('/register'); // Redireciona de volta para a página de registro em caso de erro
        return;
      }
      console.log('Usuário cadastrado com sucesso');
      res.redirect('/login'); // Redireciona para a página de login após o cadastro bem-sucedido
    }
  );
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('login'); // Renderiza o arquivo login.ejs para exibir o formulário de login
});

// Rota para processar o login
app.post('/login', async (req, res) => {
  const { username, password } = req.body; // Extrai os dados do formulário

  // Procurar usuário no banco de dados
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    async (err, results) => {
      if (err) {
        console.error('Erro ao buscar usuário:', err);
        res.redirect('/login'); // Redireciona de volta para a página de login em caso de erro
        return;
      }

      if (results.length > 0) {
        // Verificar senha
        const user = results[0];
        if (bcrypt.compareSync(password, user.password)) {
          // Se a senha está correta, armazena o usuário na sessão
          req.session.user = user;
          res.redirect('/dashboard'); // Redireciona para o painel do usuário
        } else {
          res.redirect('/login'); // Redireciona de volta para a página de login se as credenciais estiverem incorretas
        }
      } else {
        res.redirect('/login'); // Redireciona de volta para a página de login se o usuário não foi encontrado
      }
    }
  );
});

// Rota para o painel do usuário
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    // Se houver um usuário na sessão, renderiza o painel do usuário
    res.render('dashboard', { user: req.session.user });
  } else {
    res.redirect('/login'); // Redireciona para a página de login se não houver usuário na sessão
  }
});

// Rota para fazer logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    // Destroi a sessão e redireciona para a página de login
    res.redirect('/login');
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});