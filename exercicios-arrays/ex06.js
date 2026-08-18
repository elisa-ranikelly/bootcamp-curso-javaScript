let nomes = ["Ana", "Bia", "Daniel"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaQuantidade(array) {
    if(array.length < 5){
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
};

verificaQuantidade(nomes);
verificaQuantidade(numeros);