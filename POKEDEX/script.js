// Seleciona o elemento HTML com o id "pokeContainer", onde os cartões dos Pokémons serão colocados
const pokeContainer = document.querySelector("#pokeContainer");

// Define quantos Pokémons serão buscados e exibidos (neste caso, os 150 primeiros)
const pokemonCount = 250;

// Define as cores associadas a cada tipo de Pokémon
const colors = {
    // fire: '#ee0000',      // Fogo 
    // grass: '#defde0',       // Planta
    // electric: '#FCF7DE',    // Elétrico
    // water: '#DEF3FD',       // Água
    // ground: '#f4e7da',      // Terrestre
    // rock: '#d5d5d4',        // Pedra
    // fairy: '#fceaff',       // Fada
    // poison: '#bd00bdff',    // Veneno
    // bug: '#f8d5a3',         // Inseto
    // dragon: '#97b3e6',      // Dragão
    // psychic: '#eaeda1',     // Psíquico
    // flying: '#F5F5F5',      // Voador
    // fighting: '#E6E0D4',    // Lutador
    // normal: '#F5F5F5'       // Normal
}

// Cria uma lista com os nomes dos tipos principais de Pokémon (as chaves do objeto "colors")
const mainTypes = Object.keys(colors);

// Função assíncrona que busca os dados dos Pokémons de 1 até 150
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemonCount; i++){
        // Espera a função getPokemons terminar antes de ir para o próximo
        await getPokemons(i)
    }
}

// Função que busca os dados de um Pokémon específico usando a API do PokéAPI
const getPokemons = async (id) => {
    // Monta a URL com o número do Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
    // Faz a requisição para a API
    const resp = await fetch(url)
    
    // Converte a resposta para formato JSON (dados legíveis)
    const data = await resp.json()
    
    // Cria o cartão do Pokémon com os dados recebidos
    createPokemonCard(data)
}

// Função que cria o cartão visual do Pokémon
const createPokemonCard = (poke) => {
    // Cria uma nova div para o cartão
    const card = document.createElement('div')
    
    // Adiciona a classe "pokemon" para estilizar o cartão
    card.classList.add("pokemon")

    // Formata o nome do Pokémon com a primeira letra maiúscula
    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    
    // Formata o número do Pokémon com 3 dígitos (ex: 001, 045)
    const id = poke.id.toString().padStart(3,'0')

    // Pega os tipos do Pokémon (alguns têm mais de um tipo)
    const pokeTypes = poke.types.map(type => type.type.name)
    
    // Encontra o tipo principal que está na lista de cores
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    
    // Pega a cor correspondente ao tipo
    const color = colors[type]

    // Define a cor de fundo do cartão
    card.style.backgroundColor = color

    // Monta o conteúdo HTML do cartão com imagem, nome, número e tipo
    const pokemonInnerHtml =
    `   
    <div class="container"
    <div class="pokeContainer" id="pokeContainer">
    <div class="pokemon">
            <img class="imgContainer" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${poke.id}.gif" alt="${name}">
        </div>
        <div class="cardzin">
            <span class="number">#${id}</span>
            <h3 class="namePoke">${name}</h3>
            <small class="type">Type:<span>${type}</span> </small>
        </div>
        </div>
        `


    // Coloca o conteúdo HTML dentro da div do cartão
    card.innerHTML = pokemonInnerHtml

    // Adiciona o cartão dentro do container principal na página
    pokeContainer.appendChild(card)
}

// Chama a função para começar a buscar e mostrar os Pokémons
fetchPokemons()


//contar a quantidade de itens na api
//const getPokemons = async () =>{
//    const url = ` https://pokeapi.co/api/v2/pokemon/`
//    const resp = await fetch(url)
//    const data = await resp.json()
//    console.log(data);
//}

//getPokemons()
//-----------------------------//
//lista o nome dos pokemons e types
//console.log(data.types[0].type.name);