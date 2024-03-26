const { connSequelize, BD } = require('../config/coneccao')
require('./associacoes'); // Importa o arquivo de associações

fetch('http://localhost:8000/')
.then(res => res.json())
.then((json) => {
  console.log(json);
  const ul = document.getElementById('Musicos');
  json.forEach((tb_usuario) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href ="#">
      <img src="${tb_usuario.nm_usuario}">
      <span class="testo">${tb_usuario.cd_senha}</span>
    </a>`;
    /*<div class="publi-basic">
                <div class="perfil">
                    <div class="fake-perfil-img">
                    </div>
                </div>
                <div class="false-img">
                    <p>Colocamos um Terra planista e um cientis para conversar sem que os dois soubensem</p>
                </div>
            </div> */
    ul.appendChild(li);
  })
})

function filtrar() {
  var input, filter, ul, li, a, i, txtValue, span, count = 0;

  input = document.getElementById("idbusca");
  ul = document.getElementById("Lista"); // Ajuste para o ID correto, se necessário

  filter = input.value.toUpperCase();

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      count++;
      span = li[i].querySelector(".testo");

      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return `<strong>${match}</strong>`;
        });
      }

    } else {
      li[i].style.display = "none";
    }
  }

  ul.style.display = count === 0 ? "none" : "block";
}

