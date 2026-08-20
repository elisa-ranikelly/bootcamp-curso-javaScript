class ContaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositar(valor){
        this.saldoContaCorrente += valor;
    }

    sacar(valor){
        if(valor > this.saldoContaCorrente){
            console.log("Saldo insuficiente!");
        }else{
             this.saldoContaCorrente -= valor;
        }
    }

    transferirCP(valor){
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupanca += valor;
    }

    transferirCC(valor){
        this.saldoContaCorrente += valor;
        this.saldoContaPoupanca -= valor;
    }

    juros(){
        let jrs = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
        this.saldoContaPoupanca += jrs;
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(saldoContaCorrente, saldoContaPoupanca, juros){
        super(saldoContaCorrente, saldoContaPoupanca, juros*2);
    }
}

let contaBancaria = new ContaBancaria(1000, 500, 3);

contaBancaria.sacar(200);

contaBancaria.depositar(3500);

contaBancaria.juros();

console.log(contaBancaria);

let contaBancaria2 = new ContaEspecial(1000, 600, 2);
console.log(contaBancaria2);