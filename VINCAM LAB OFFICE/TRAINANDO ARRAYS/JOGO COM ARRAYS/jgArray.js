let cor = [
    "red",
    "pink",
    "yellow",
    "gray",
    "purple"
];

let i = 0;

function mudarCor(){
    let caixaCor = document.getElementById("caminho1");
    caixaCor.style.backgroundColor = cor[i];

    i++;

    if(i >= cor.length) {
        i = 0;
    }
}