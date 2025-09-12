function buscar(){
    // GUARDA NA VRIAVEL VALOR DO INPUT
    var entrada = document.getElementById("entrada").value.toLowerCase();

    // Link da api
    var url="https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        // escrever no html
        tela.innerHTML = 
        `
        <h2> ${dados.name} </h2>
        <img class="pokemon" src="${dados.sprites.front_default}">
        <img class="pokemon" src="${dados.sprites.back_default}">
        `;
    })
}