const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a e b"));

const notaz = /[^a-z]/;
console.log(notaz.test("asdf"));