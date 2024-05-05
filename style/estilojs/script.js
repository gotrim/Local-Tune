function barra() {
    var menu = document.getElementById('menu-hamburguer');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.getElementById("esquerda").style.width = "calc(60% - 100px)";
        document.getElementById("conteudo-barra").style.display = "block";
    } else {
        document.getElementById("esquerda").style.width = "60px";
        document.getElementById("conteudo-barra").style.display = "none";
    }
}
