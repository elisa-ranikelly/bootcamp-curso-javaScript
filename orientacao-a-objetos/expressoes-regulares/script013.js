let validaData = /[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{2,4}/;
console.log(validaData.test("12/09/2004"));
console.log(validaData.test("1/0923/2004"));
console.log(validaData.test("1/09/2004"));
console.log(validaData.test("1/9/20"));