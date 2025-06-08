document.getElementById("criarLista").addEventListener("click", function(){
    const nomeLista = prompt("Digite o nome da nova lista: ");
    if (!nomeLista) return; 

    const novaLi = document.createElement("li");
    novaLi.textContent = nomeLista;

    let listasSalvas = JSON.parse(localStorage.getItem("listas")) || [];
    listasSalvas.push(nomeLista);
    localStorage.setItem("listas", JSON.stringify(listasSalvas));

    document.getElementById("listas").appendChild(novaLi);
})

// document.getElementById("criaLista") -> procura um elemento pelo ID
// .addEventListener("click", function() -> escuta quando botão é clicado e executa o que esta nas {}
// const nomeLista = prompt("Digite o nome da nova lista: "); -> pedindo o nome e salvando na variavel "nomeLista"
// if (!nomeLista) return; -> se cancelar ou deixar vazio, nada acontecerá


// document.createElement("li"); -> nova li do html como variavel
// novaLi.textContent = nomeLista; -> joga o texto do li no prompt


// let listasSalvas = JSON.parse(localStorage.getItem("listas")) || []; -> pega oque ta no localStorage com a chave "listas", se n houver ele usa uma lista vazia
// listasSalvas.push(nomeLista); -> novo nome da lista no fim do array
// localStorage.setItem("listas", JSON.stringify(listasSalvas)); -> converte em texto com "stringify" e salva

// document.getElementById("listas").appendChild(novaLi); -> adiciona o li na tela/html"

let listasSalvas = JSON.parse(localStorage.getItem("listas")) || [];

listasSalvas.forEach(function(nomeLista){
    const novaLi = document.createElement("li");
    novaLi.textContent = nomeLista;
    document.getElementById("criarLista").appendChild(novaLi);
})