const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})
//autenticação de conexão com o banco (atualizar para exibir mensagem)
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

function salvarDados(event) {
    event.preventDefault();
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var mensagemInput = document.getElementById('mensagem');
    var mensagemErro = [];
    if (nomeInput.value.trim() === '') {
      mensagemErro.push('O campo "Nome" é obrigatório. ');
    }
    if (emailInput.value.trim() === '') {
      mensagemErro.push('O campo "Email" é obrigatório. ');
    }
    if (mensagemInput.value.trim() === '') {
      mensagemErro.push('Escreva sua reclamação. ');
    }
    if (!isValidEmail(emailInput.value.trim())) {
      mensagemErro.push('Email inválido.');
    }
    if (mensagemErro.length > 0) {
      displayErros(mensagemErro);
    } else {
      document.getElementById('successMessage').style.display = 'block';
      var dados = {
        name: nomeInput.value.trim(),
        email: emailInput.value.trim(),
        mensagem: mensagemInput.value.trim()
      };
      localStorage.setItem('dadosForm', JSON.stringify(dados));
      exibirValoresRegistrados(dados);
      nomeInput.value = '';
      emailInput.value = '';
      mensagemInput.value = '';
      window.location.href = 'html.html';
    }
  }
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function displayErros(errors) {
    var erroContainer = document.getElementById('erroContainer');
    erroContainer.innerHTML = '';
    var listaErro = document.createElement('ul');
    listaErro.classList.add('error');
    errors.forEach(function (error) {
      var itemLista = document.createElement('li');
      itemLista.textContent = error;
      listaErro.appendChild(itemLista);
    });
    erroContainer.appendChild(listaErro);
  }
 
  