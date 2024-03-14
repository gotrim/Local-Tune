"use strict";

/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {

        var searchValue = document.getElementById("search").value; // Pega o valor do input de pesquisa

        if (searchValue === "pc da xuxa" || searchValue === "FLAAMEENGOO" || searchValue == "BATATA") {
            alert("NATHAM GAY");
        }
    });
})

var content = document.querySelector(".content");
var search = document.querySelector("input[type='search']");
var items = [];

// Atribuindo a função de callback ao evento oninput do input de busca
search.oninput = function () {
  // Limpa o conteúdo atual do elemento com a classe ".content"
  content.innerHTML = "";

  // Filtra os itens com base no valor do input de busca e adiciona-os ao conteúdo
  items.filter(function (item) {
    // Verifica se o item (convertido para minúsculas) inclui a entrada de busca (também convertida para minúsculas)
    return item.toLowerCase().includes(search.value.toLowerCase());
  }).forEach(addHTML); // Adiciona cada item filtrado ao HTML
};

// Função para adicionar um item HTML ao conteúdo
function addHTML(item) {
  var div = document.createElement("div"); // Cria um novo elemento div
  div.innerHTML = item; // Define o conteúdo do elemento div como o argumento item
  content.append(div); // Adiciona o elemento div ao conteúdo
}

// Requisição para obter os usuários da API JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users").then(function (data) {
  return data.json();
}) // Converte a resposta para o formato JSON
.then(function (users) {
  // Para cada usuário retornado
  users.forEach(function (user) {
    addHTML(user.name); // Adiciona o nome do usuário ao conteúdo
    items.push(user.name); // Adiciona o nome do usuário ao array de itens
  });
});

/*====================================*/

//CODIGO DO ARTHUR B. ATUALIZAR PARA LIGAR COM O BANCO NO FUTURO

