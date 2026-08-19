class Cachorro {
    construtor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}

Cachorro.prototype.raca = 'SRD'; // Adicionando uma propriedade ao protótipo da classe Cachorro
Cachorro.prototype.patas = 4; // Adicionando outra propriedade ao protótipo da classe Cachorro

let labrador = new Cachorro('Buddy', 'Labrador');
console.log(labrador.patas);
console.log(labrador.raca); 
console.log(Cachorro.prototype.raca); 