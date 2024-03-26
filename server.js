const express = require('express');
const app = express();
const loginRoutes = require('caminho/para/seu/arquivo/routes');

app.use(express.json()); // Para parsear JSON no corpo das requisições
app.use('/api', loginRoutes); // Adicione suas rotas ao app

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3307');
});
