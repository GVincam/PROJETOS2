var num1;
var num2;
var total;

        function entrada(){
          num1 = document.getElementById("n1").value;
          num2 = document.getElementById("n2").value;
        }

        function converter(){
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);   
        }

function somar(){
    entrada();
    converter();
    // processamento somas
    total = num1 + num2;
    // saída, escrever na tela      
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function multiplicar(){
    // // entrada de dados
    // num1 = document.getElementById("n1").value;
    // num2 = document.getElementById("n2").value;
    // // convertendo de texto para numérico
    // num1 = parseInt(num1);
    // num2 = parseInt(num2);

    entrada();
    converter();
    // processamento somas
    total = num1 * num2;
    // saída, escrever na tela      
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function subtrair(){
    entrada();
    converter();    
    // processamento somas
    total = num1 - num2;
    // saída, escrever na tela      
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}


function dividir(){
    // // entrada de dados
    // num1 = document.getElementById("n1").value;
    // num2 = document.getElementById("n2").value;
    // // convertendo de texto para numérico
    // num1 = parseInt(num1);
    // num2 = parseInt(num2);
    entrada();
    converter();
    // processamento somas
    total = num1 / num2;
    // saída, escrever na tela      
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function limpar(){
    // entrada de dados - inputs
    num1 = document.getElementById("n1").value="";
    num2 = document.getElementById("n2").value="";
    tela = document.getElementById("resultado");
    tela.innerHTML = "";
}