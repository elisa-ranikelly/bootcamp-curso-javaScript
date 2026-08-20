function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error("Apenas strings devem ser passadas como paramêtro.")
    }else{
        console.log(`Olá, ${nome}`);
    }
}

saudacao("Elisa");