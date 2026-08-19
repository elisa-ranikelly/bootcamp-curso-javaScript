class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    get getSaldo(){
        return this.saldo;
    }

    set setSaldo(saldo){
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    saque(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
        }
    }
}

let conta = new ContaBancaria(1000);
console.log(conta.getSaldo);

conta.depositar(500);
console.log(conta.getSaldo);

//conta.saque(2000);
