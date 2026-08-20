let ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(ip.test("127.0.0.1"));
console.log(ip.test("8.8.8.8"));
console.log(ip.test("192.168.0.62"));
console.log(ip.test("123.6.0"));
