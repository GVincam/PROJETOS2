    let pontos = 0;

    const receber = document.getElementById("receber");
    const textPontos = document.getElementById("pontos");

    const comprar = document.getElementById("comprar");
    const painelItem = document.querySelector(".aparecerItens");

    const adquirir = document.getElementById("adquirir");
    const escolherOutro = document.getElementById("outroItem");
    
    
    receber.addEventListener("click", ganharPontos);
    
      function ganharPontos() {
        pontos = 1000;
        
        textPontos.innerHTML = pontos;
      }

        comprar.addEventListener("click", function(){
            painelItem.style.display = "block";
        });

        adquirir.addEventListener("click", function(){
            pontos = 1000 - 500;
            textPontos.innerHTML = pontos;
            painelItem.style.display = "none";
        })

