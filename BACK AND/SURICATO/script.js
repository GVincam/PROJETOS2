function buscar(){
    // pegar o cep do input
    var cep = document.getElementyById('cep').value;
    // link da api de cep
    var url ="viacep.com.br/ws/01001000/json/"+cep+"/json"

    // faz a busca na api de cep
fetch(url)
.then(response => response.json())
.then(dados => { 
    if(dados.erro){
        // se tiver erro
        document.getElementById('resultado').textContent = 'Cep não encontrado!';
    }else{
        // se der certo
        document.getElementById('resultado').innerHTML = '<strong> Cidade: </strong> ' +dados.localidade
    }
});

}

buscar()