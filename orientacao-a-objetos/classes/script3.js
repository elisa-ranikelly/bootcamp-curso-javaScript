// CONSTRUTOR COM ES6
class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro("Labrador", 4, "Amarelo");
console.log(labrador);

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

let pessoa = new Pessoa("Elisa", 21, "Feminino");
console.log(pessoa);
