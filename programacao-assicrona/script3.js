let p = Promise.resolve(new Error("Não deu certo"));

console.log("Executa primeiro esse");

p.then(value => console.log(value))
.catch(reason => console.log("Falhou: " + reason));