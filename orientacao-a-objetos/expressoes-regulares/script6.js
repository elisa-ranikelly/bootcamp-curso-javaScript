const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const padrao2 = /\d+\w?/;
console.log(padrao2.test("1234"));
console.log(padrao2.test("123a"));