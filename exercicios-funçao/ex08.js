function imprimir(texto){
    if(texto.length > 10){
        return "Texto muito longo";
    }else{
        return "Texto dentro do limite";
    }
}

console.log(imprimir("Elisa"));
console.log(imprimir("eu te amo"));
console.log(imprimir("Elisa de Fátima Ranikelly Sousa Araújo"))
