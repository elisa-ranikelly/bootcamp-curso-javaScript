let idade = 21;
let possuiCNH = false;

if(idade >= 18 && possuiCNH === false){
    console.log("Você não pode dirigir, pois não possui CNH.");
}else if(idade >= 18 && possuiCNH === true){
    console.log("Você pode dirigir, pois possui CNH.");
}else{
    console.log("Você não pode dirigir por ser de menor e não possuir CNH.");
}