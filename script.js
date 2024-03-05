/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {

        var searchValue = document.getElementById("search").value; // Pega o valor do input de pesquisa

        if (searchValue === "pc da xuxa" || searchValue === "FLAAMEENGOO" || searchValue == "BATATA") {
            alert("NATHAM GAY");
        }
    });
})*/

const content = document.querySelector(".content");
const search = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
    content.innerHTML = "";

    items
        .filter((item) => {
            item.toLowerCase(.includes(inputSearch))
        })
}

function addHTML(item) {
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users)=> {
        users.forEach((user)=> {
            addHTML(user.name);
            items.push(user.name);
        });
    });