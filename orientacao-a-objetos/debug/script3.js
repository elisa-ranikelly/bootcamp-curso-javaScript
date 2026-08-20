function checarInput(num){
    let number = Number(num);
    if(!Number.isNaN(number)){
        return num;
    }else{
        alert("Digite apenas número!");
    }
}

let numero = prompt("Digite um número: ");
checarInput(numero);