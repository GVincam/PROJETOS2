var estoque = document.getElementById("verEstoque");
var caixaDeOpcao = document.querySelector(".caixaDeOpcao");

var deposito = document.getElementById("deposito");


estoque.addEventListener("click", function(){
     caixaDeOpcao.classList.add("ativo");

});


deposito.addEventListener("click", function(){

     var painelEstoque = createElement("section");
     painelEstoque.classList.add("painelEstoque");
     painelEstoque.innerText = "Painel de Estoque";
     painelEstoque.style.color = "black";
    document.body.appendChild(painelEstoque);
    

});