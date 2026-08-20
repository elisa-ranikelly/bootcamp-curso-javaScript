const reg = new RegExp("elisa");

console.log(reg.test("tem EEelisaaa?"));
console.log(reg.test("tem asile?"));

const reg2 = /elisa/;

console.log(reg.test("tem EEelisaaa?"));
console.log(reg.test("tem asile?"));
