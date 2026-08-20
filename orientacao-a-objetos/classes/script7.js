class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    get getNome() {
        return this.nome;
    }

    get getIdade() {
        return this.idade;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    set setIdade(idade) {
        this.idade = idade;
    }
};

let pessoa1 = new Pessoa('João', 30);
console.log(pessoa1);

console.log(pessoa1.getNome);

pessoa1.setNome = "Elisa";
pessoa1.setIdade = 21;

console.log(pessoa1);
console.log(pessoa1.getNome);
console.log(pessoa1.getIdade);
