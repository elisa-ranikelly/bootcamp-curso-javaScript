let primo = 10;
let divisoes = 0;

for(let i = 1; i <= primo; i++) {
    if(primo % i === 0) {
        divisoes++;
    }
}

if(divisoes === 2) {
    console.log(primo + " é primo");
} else {
    console.log(primo + " não é primo");
}