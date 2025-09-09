var dogimg = document.getElementById("dogimg");
var botao = document.getElementById("botao");

//função que busca imagem de dog
async function buscar(){
    //try vai rodar app normalmente
    try {
        //faz a busca do link da api
        var response = await fetch("https://dog.ceo/api/breeds/image/random");
        //armazena o conteúdo
        var dados = await response.json();
        //joga na imagem o link da foto
        dogimg.src= dados.message;

    }catch(error){ s
        //catch serve para capturar erro se der errado
        alert("Erro ao buscar dog!", error);
    }
}
//se tiver evento de click no botão chama a função buscar
botao.addEventListener("click", buscar);