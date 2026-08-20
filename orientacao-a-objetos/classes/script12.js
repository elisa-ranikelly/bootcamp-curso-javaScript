class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setRua(rua){
        this.rua = rua;
    }

    set setBairro(bairro){
        this.bairro = bairro;
    }

    set setCidade(cidade){
        this.cidade = cidade;
    }

    set setEstado(estado){
        this.estado = estado;
    }
};

console.log("Endereço: ");
let endereco = new Endereco("Pedro de Toledo", "Vila Mariana", "São Paulo", "SP");

console.log(endereco.rua);
console.log(endereco.bairro);
console.log(endereco.cidade);
console.log(endereco.estado);

endereco.setRua = "Rua das Flores";
endereco.setBairro = "Jardim das Rosas";
endereco.setCidade = "Rio de Janeiro";
endereco.setEstado = "RJ";

console.log("Endereço atualizado: ");
console.log(endereco.rua);
console.log(endereco.bairro);
console.log(endereco.cidade);
console.log(endereco.estado);