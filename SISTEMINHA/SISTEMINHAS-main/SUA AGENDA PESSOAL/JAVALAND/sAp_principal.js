let adic = document.getElementById("adic");
let formu = document.querySelector(".addTarefa");

let soltar = document.getElementById("soltar");
let tarefas = document.querySelector(".tarefas");

let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");

adic.addEventListener("click", function(){
    formu.style.display = "block";
})

soltar.addEventListener("click", function(){

    let tituloVal = titulo.value;
    let descricaoVal = descricao.value;
    

    let tarefaNova = document.createElement("div");
    tarefaNova.setAttribute("class", "tarefa1");


    let tituloTarefa = document.createElement("h3");
    tituloTarefa.innerText = tituloVal;

    let boxTarefa = document.createElement("div");
    boxTarefa.classList.add("bxTarefa");

    let descricaoTarefa = document.createElement("p");
    descricaoTarefa.innerText = descricaoVal;

    tarefaNova.appendChild(tituloTarefa);
    boxTarefa.appendChild(descricaoTarefa);
    tarefaNova.appendChild(boxTarefa);
    
    

    let adicionarTarefa = document.createElement("button");
    adicionarTarefa.setAttribute("id", "adTarefa");
    adicionarTarefa.innerText = "Adicionar Tarefa!";

    adicionarTarefa.addEventListener("click", function(){

        if(boxTarefa.querySelector("input")) return;
        
        let newTarefa = document.createElement("input");
        newTarefa.placeholder = "Adiciona uma nova Tarefa!"

        let saver = document.createElement("button");
        saver.innerText = "Adicionar";

        boxTarefa.appendChild(newTarefa);
        boxTarefa.appendChild(saver);

        saver.addEventListener("click", function(){

            let nValortarefa = newTarefa.value;

            if (nValortarefa !== "") {
                let newDescricao = document.createElement("p");
                newDescricao.innerText = nValortarefa;

                boxTarefa.appendChild(newDescricao);

                newTarefa.remove();
                saver.remove();
            }
        })

        
    })

    tarefaNova.appendChild(adicionarTarefa);
   



    let confirmar = document.createElement("button");
    confirmar.classList.add("fa-solid");
    confirmar.classList.add("fa-check");

    let alternar = document.createElement("button");
    alternar.classList.add( "fa-solid");
    alternar.classList.add("fa-rotate-right");

    let excluir = document.createElement("button");
    excluir.classList.add("fa-solid");
    excluir.classList.add("fa-trash");


    confirmar.addEventListener("click", function(){
       descricaoTarefa.classList.add("concluir");
    })

    alternar.addEventListener("click", function(){
        
        let editDescricao = input("Editar tarefa!");

        if(editDescricao !== "" && editDescricao !== null){
            descricaoTarefa.innerText = editDescricao;
        }
    })

    excluir.addEventListener("click", function(){
        descricaoTarefa.remove();
        nValortarefa.remove();
    })
    
    tarefaNova.appendChild(confirmar);
    descricaoTarefa.appendChild(alternar);
    tarefaNova.appendChild(excluir);
    descricaoTarefa.appendChild(excluir);
   
    
    
    tarefas.appendChild(tarefaNova);
});
