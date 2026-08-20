let expressao = /Marca: (Nike|Adidas|Puma|Asics)/;
console.log(expressao.test("nike"));
console.log(expressao.test("Marca: Nike"));
console.log(expressao.test("Marca: nike"));
console.log(expressao.test("marca: Nike"));