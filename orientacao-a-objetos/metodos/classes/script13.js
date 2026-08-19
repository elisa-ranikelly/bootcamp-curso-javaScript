class Carro{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigirCarro(km){
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecerCarro(litros){
        this.gasolinaRestante += 1;
    }
}

let carro = new Carro("Creta", "branco", 100, 10);
carro.dirigirCarro(250);

carro.abastecerCarro(50);
console.log(carro);