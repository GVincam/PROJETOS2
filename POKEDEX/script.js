const pokeContainer = document.querySelector("#pokeContainer");
// Seleciona o elemento HTML com o id"pokemonContainer", onde os card dos pokemons serão colocados

const pokemonCount = 151;
// define quantos pokemons serão buscados na api e exibidos na tela

// Define as cores associadas a cada tipo de Pokémon
const colors = {
    fire: '#ee0000ff',      // Fogo
    grass: '#DEFDE0',       // Planta
    electric: '#FCF7DE',    // Elétrico
    water: '#DEF3FD',       // Água
    ground: '#f4e7da',      // Terrestre
    rock: '#d5d5d4',        // Pedra
    fairy: '#fceaff',       // Fada
    poison: '#bd00bdff',    // Veneno
    bug: '#f8d5a3',         // Inseto
    dragon: '#97b3e6',      // Dragão
    psychic: '#eaeda1',     // Psíquico
    flying: '#F5F5F5',      // Voador
    fighting: '#E6E0D4',    // Lutador
    normal: '#F5F5F5'       // Normal
}

// função que busca os dados de um pokemon especifico usando a api do pokeAPI
const getPokemons = async (id) =>{
    // Mostra a URL com o número do Pokemon
    const url = 'https://pokeapi.co/api/v2/pokemon/${id}'

    // faz a requisição para a API
    const resp = await fetch(url)

    // converte a resposta para o formato JSON (dados legiveis)
    const data = await resp.json()

    create.PokemonCard(data)

}

const createPokemonCard = (poke) =>{
    // cria uma nova div para o cartão
    const card = document.createElement('div')
    
    // formata o numero do pokemon com 3digitos (ex:001, 045)
    card.classList.add("pokemon")

    // pega os tipos do pokemon (alguns tem mais de um tipo)
    const name = poke.name[0].toUpperCase() + poke.name.slice(1)

    // encontra o tipo principal que sta na lista de cores
    const id = poke.id.toString().padStart(3,'0')

    // pega cor correspondente ao tipo
    const type = mainTypes.find(type => poketypes.index0f(type)> -1)

    // define a cor de fundo do cartão
    const color = colors[type]

    // define a cor de fundo do cartão
    card.style.backgroundColor = color


    const pokemonInnertHtml=  `   <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${poke.id}.gif" alt="${name}">
        </div>
        <div class="ifoPoke">
            <span class="number">#${id}</span>
            <h3 class="namePoke">${name}</h3>
            <small class="type">Type:<span>${type}</span> </small>
        </div>`

    // Coloca o conteúdo HTML dentro da div do cartão
    card.innerHTML = pokemonInnerHtml

    // Adiciona o cartão dentro do container principal na página
    pokeContainer.appendChild(card)
}

// Chama a função para começar a buscar e mostrar os Pokémons
fetchPokemons()