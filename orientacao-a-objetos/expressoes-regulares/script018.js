let nome = /(?=.{3,16}$)[a-z0-9-_]/;
console.log(nome.test("elisa_123"));
console.log(nome.test("as"));
console.log(nome.test("1111111111111111111999999"));