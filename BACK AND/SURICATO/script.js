function buscar(){
    var cep = 87970000
    var url ="viacep.com.br/ws/01001000/json/"+cep+"/json"

fetch(url)
.then(response => response.json())
.then(dados => { alert(dados.localidade) });

}

buscar()