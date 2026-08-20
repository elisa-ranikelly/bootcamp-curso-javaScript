let letrasMaiusculas = /[A_Z]/;
console.log(letrasMaiusculas.test("AELISA"));
console.log(letrasMaiusculas.test("A eLISa"));
console.log(letrasMaiusculas.test("elisa"));
