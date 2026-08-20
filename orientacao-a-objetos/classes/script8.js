class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};


class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }
}

let cachorro = new Cachorro('Rex', 3, 'Labrador');
console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.raca);