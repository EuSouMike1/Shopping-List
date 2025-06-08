const urlParams = new URLSearchParams(window.location.search);
const nomeLista = urlParams.get("nome");

if(!nomeLista){
    document.body.innerHTML = "<h1>Lista não encontrada<h1>";
} else{
    document.body.innerHTML = `<h1>Lista: ${nomeLista}<h1>`;
}