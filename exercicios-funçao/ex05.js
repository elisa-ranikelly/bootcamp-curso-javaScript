function imprimir(idade){
    if(idade >= 18){
        return "Você já é maior de idade, então já pode entrar na auto escola";
    }else{
        return "Você não é maior de idade, então ainda não pode entrar na auto escola"
    }
}

console.log(imprimir(18));
console.log(imprimir(15));