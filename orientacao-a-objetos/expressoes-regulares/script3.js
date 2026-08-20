const pontoRegex = /./;
console.log(".");
console.log(pontoRegex.test("aashur"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("12dkei"));
console.log(pontoRegex.test("12"));

const dRegex = /\d/; //[0-9]
console.log("d");
console.log(dRegex.test("1234"));

const dRegex2 = /\D/; //[^0-9]
console.log("D");
console.log(dRegex2.test("aashur"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("12dkei"));
console.log(dRegex2.test("12"));

const wRegex = /\w/; 
console.log("w");
console.log(wRegex.test("aashur"));
console.log(wRegex.test(" "));
console.log(wRegex.test("12dkei"));
console.log(wRegex.test("12"));