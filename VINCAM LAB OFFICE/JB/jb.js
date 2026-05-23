
    let fogo = {
        personagem: document.getElementById("fogoAp"),
        vida: 150,
        energia: 100,
  
    bolaFogo(){
        let bola = document.createElement("div");
        bola.style.width = "60px"
        bola.style.height = "60px"
        bola.style.borderRadius = "50%"
        bola.style.backgroundColor = "orange"
        bola.style.position = "absolute"
        
        bola.style.left = "160px"
        bola.style.top = "200px"
        
        document.body.appendChild(bola)
    
    let x = 180
  
    let move = setInterval(function(){
      
        x+=20
    
        bola.style.left = x + "px"
      
        if(x > 1450){
        agua.vida -= 20
        
       let mesageDano = document.createElement("p")
        
        mesageDano.innerText = "-20"
        mesageDano.style.fontSize = "30px"
        mesageDano.style.color = "white"
        mesageDano.style.position = "absolute"
        mesageDano.style.left = "1470px"
        mesageDano.style.top = "140px"
        document.body.appendChild(mesageDano)
        
        setTimeout(function(){

          mesageDano.remove()

        }, 1000)
        
        bola.remove()
        
        clearInterval(move)
        
      }
    },10);

  }
}


    let agua = {
        personagem: document.getElementById("aguaAp"),
        vida: 150,
        energia: 100,
  
    }