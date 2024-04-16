document.getElementById('menu-btn').addEventListener('click', function() {
    var navbar = document.getElementById('navbar').getElementsByTagName('ul')[0];
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        this.classList.remove('close');
        this.textContent = 'Menu'; // Botão volta a mostrar 'Menu'
    } else {
        navbar.classList.add('active');
        this.classList.add('close');
        this.textContent = 'X'; // Muda o texto do botão para 'X'
    }
});
