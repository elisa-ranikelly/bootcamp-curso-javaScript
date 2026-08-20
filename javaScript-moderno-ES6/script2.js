const array = [1, 4, 7, 0];

const numeros = array.filter((num) => {
    if(num >= 4){
        return num;
    }
});

console.log(numeros);

const users = [
    {name: "Elisa", available: true},
    {name: "José", available: false},
    {name: "Maria", available: true},
    {name: "João", available: false},
];

const disponivel = users.filter((disp) => {
    if(disp.available === true){
        return disp.name;
    }
});

console.log(disponivel);