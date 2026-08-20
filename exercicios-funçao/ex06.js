function detectarTipo(dado){
    if(typeof dado === "number"){
        console.log(`${dado} é um número`);
    }else if(typeof dado === "string"){
        console.log(`${dado} é uma string`);
    }else if(typeof dado === "boolean"){
        console.log(`${dado} é um boolean`);
    }
}

detectarTipo(12);
detectarTipo(false);
detectarTipo("amor");