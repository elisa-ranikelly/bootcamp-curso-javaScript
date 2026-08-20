let cachorro = {
    patas: 4,
    raca: "SRD",

    latir: function() {
        console.log("Au au");
    }
}

// Cria um novo objeto com o protótipo cachorro
let labrador = Object.create(cachorro);
console.log(labrador.raca = "Labrador");
labrador.latir();

let pastorAlemao = Object.create(cachorro);
console.log(pastorAlemao.raca = "Pastor Alemão");
pastorAlemao.latir();


