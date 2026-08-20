const cep = /\d{5}-\d{3}/;
console.log(cep.test("58500-000"));

const cpf = /\d{3}.\d{3}.\d{3}-\d{2}/;
console.log(cpf.test("345.567.876-65"));