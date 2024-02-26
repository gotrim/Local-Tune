document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário (envio/reload da página)

        var searchValue = document.getElementById("search").value; // Pega o valor do input de pesquisa

        if (searchValue === "pc da xuxa" || searchValue === "FLAAMEENGOO" || searchValue == "BATATA") {
            alert("NATHAM GAY");
        }
    });
});
