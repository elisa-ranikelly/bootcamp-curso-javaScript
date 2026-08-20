const reg = /\w+: (João|José|Maria)/

console.log(reg.test("Nome: Elisa"));
console.log(reg.test("Nome: Maria"));
console.log(reg.test("Maria"));