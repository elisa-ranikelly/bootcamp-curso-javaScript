const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [1, 4, ...a1, 5, ...a2, ...a3];
console.log(a4);

const carNome = {nome: "Creta"};
const carCor = {cor: "Branco"};
const carCompleto = {...carNome, ...carCor};
console.log(carCompleto);
