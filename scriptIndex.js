document.getElementById("criarLista").addEventListener("click", function () {
    const nomeLista = prompt("Digite o nome da nova lista: ");
    if (!nomeLista) return;

    const novaLi = document.createElement("li");
    novaLi.textContent = nomeLista;

    let listasSalvas = JSON.parse(localStorage.getItem("listas")) || [];
    listasSalvas.push(nomeLista);
    localStorage.setItem("listas", JSON.stringify(listasSalvas));

    document.getElementById("listas").appendChild(novaLi);
});

let listasSalvas = JSON.parse(localStorage.getItem("listas")) || [];

listasSalvas.forEach(function (nomeLista) {
    const novaLi = document.createElement("li");

    const botaoLista = document.createElement("button");
    botaoLista.textContent = nomeLista;
    botaoLista.addEventListener("click", function () {
        window.location.href = `lista.html?nome=${encodeURIComponent(nomeLista)}`;
    });

    novaLi.appendChild(botaoLista);
    document.getElementById("listas").appendChild(novaLi);
});
