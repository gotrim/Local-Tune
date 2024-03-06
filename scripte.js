//CODIGO DO ARTHUR B. ATUALIZAR PARA LIGAR COM O BANCO NO FUTURO

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
  
    errors.forEach(function(error) {
      var itemLista = document.createElement('li');
      itemLista.textContent = error;
      listaErro.appendChild(itemLista);
    });
  
    erroContainer.appendChild(listaErro);
  }
  
  function exibirValoresRegistrados(data) {
    var tabelaValoresRegistrados = document.getElementById('tabelaValoresRegistrados');
    var novaLinha = tabelaValoresRegistrados.insertRow();
  
    var colunaNome = novaLinha.insertCell();
    colunaNome.textContent = data.name;
  
    var colunaMensagem = novaLinha.insertCell();
    colunaMensagem.textContent = data.mensagem;
  }
  
  function preencherVariaveisForm() {
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var mensagemInput = document.getElementById('mensagem');
  
    var dadosSalvos = localStorage.getItem('dadosForm');
  
    if (dadosSalvos) {
      var data = JSON.parse(dadosSalvos);
      nomeInput.value = data.name;
      emailInput.value = data.email;
      mensagemInput.value = data.mensagem;
  
      exibirValoresRegistrados(data);
    }
  }
  
  preencherVariaveisForm();