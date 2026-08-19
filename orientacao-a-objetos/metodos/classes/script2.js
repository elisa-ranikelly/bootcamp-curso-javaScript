// CONSTRUTOR POR MEIOR DE UMA FUNÇÃO
function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "Preto");
console.log(doberman);

//CONSTRUTOR POR MEIO DO NEW
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuu!");
    }
};

let viralata = new Cachorro("Viralata", 4, "cinza");
console.log(viralata);
viralata.uivar();


// CONSTRUTOR POR MÉTODO PROTOTYPE

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuuuuuuuuuu")
}

