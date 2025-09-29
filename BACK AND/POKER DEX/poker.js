var contador = 0;

function buscar(){
    // GUARDA NA VRIAVEL VALOR DO INPUT
    var entrada = document.getElementById("entrada").value.toLowerCase();
// Se a entrada for menor que 3 caracteres
    // if(entrada.length < 1){
    //     entrada = contador;
    // }

    // Link da api
    var url="https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        // escrever no html
        tela.innerHTML = 
        `
        <h2> ${dados.name} </h2>
        <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${dados.id}.gif">
        <img class="pokemon-1" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${dados.id}.gif">
        <p> Id: ${dados.id} </p>
        <p> Tipo: ${dados.types.map(type => type.type.name)} </p>
        <p> Habilidades: ${dados.abilities.map(ability => ability.ability.name)} </p>
        `;
    })
}

function proximo(){
    contador = contador + 1;
    buscar();
}

function anterior(){
    contador = contador - 1;
    buscar();
}

document.getElementById("entrada").addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        buscar();
    }
    if(event.key == "ArrowLeft"){
        anterior();
    }
    if(event.key == "ArrowRight"){
        proximo();
    }
});