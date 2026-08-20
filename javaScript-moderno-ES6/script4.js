const frutas = ["Maça", "Banana", "Mamão", "Uva"];
const [f1, f2, f3, f4] = frutas;

console.log(f1);

// OBJETO:

const produto = {
    name: "Mouse",
    preco: 59.99,
    categoria: "Eletrônico",
    cor: "Cinza"
};

const {name: nome} = produto;
console.log(nome);