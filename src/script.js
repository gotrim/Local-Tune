/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {

        var searchValue = document.getElementById("search").value; // Pega o valor do input de pesquisa

        if (searchValue === "pc da xuxa" || searchValue === "FLAAMEENGOO" || searchValue == "BATATA") {
            alert("NATHAM GAY");
        }
    });
})

const content = document.querySelector(".content");
const search = document.querySelector("input[type='search']");

let items = [];

// Atribuindo a função de callback ao evento oninput do input de busca
search.oninput = () => {
    // Limpa o conteúdo atual do elemento com a classe ".content"
    content.innerHTML = "";

    // Filtra os itens com base no valor do input de busca e adiciona-os ao conteúdo
    items
        .filter((item) => {
            // Verifica se o item (convertido para minúsculas) inclui a entrada de busca (também convertida para minúsculas)
            return item.toLowerCase().includes(search.value.toLowerCase());
        })
        .forEach(addHTML); // Adiciona cada item filtrado ao HTML
}

// Função para adicionar um item HTML ao conteúdo
function addHTML(item) {
    const div = document.createElement("div"); // Cria um novo elemento div
    div.innerHTML = item; // Define o conteúdo do elemento div como o argumento item
    content.append(div); // Adiciona o elemento div ao conteúdo
}

// Requisição para obter os usuários da API JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json()) // Converte a resposta para o formato JSON
    .then((users)=> {
        // Para cada usuário retornado
        users.forEach((user)=> {
            addHTML(user.name); // Adiciona o nome do usuário ao conteúdo
            items.push(user.name); // Adiciona o nome do usuário ao array de itens
        });
    });

/*====================================

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
  
  preencherVariaveisForm();*/