class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
};

class Cachorro extends Animal{
    constructor(nome, idade, raca){
        super(nome, idade);
        this.raca = raca;
    }
};

console.log(new Cachorro instanceof Animal); // true