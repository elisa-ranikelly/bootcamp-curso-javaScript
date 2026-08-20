class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

let nome = Symbol(); // Criando um símbolo para a propriedade "nome"

Pessoa.prototype[nome] = "Elisa";
console.log(Pessoa.prototype[nome]); // Acessando a propriedade "nome" usando o símbolo

let idade = Symbol(); // Criando um símbolo para a propriedade "idade"
Pessoa.prototype[idade] = 21;
console.log(Pessoa.prototype[idade]); // Acessando a propriedade "idade" usando o símbolo