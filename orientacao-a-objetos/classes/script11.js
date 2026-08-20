class Carrinho{
    constructor(itens, quantidade, valorTotal){
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    adicionarItem(item){
        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id === item.id){
                this.itens[itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }
        }

        if(contador === 0){
            this.itens.push(item);
        }

        this.quantidade += item.quantidade;
        this.valorTotal += item.preco * item.quantidade;
    }

    removerItem(item){
        let nomeItem = item.nome.toLowerCase();
        let itemEncontrado = false;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].nome.toLowerCase() === nomeItem){
                this.itens[itemCarrinho].quantidade -= item.quantidade;
                itemEncontrado = true;
            }
        }

        if(!itemEncontrado){
            console.log("Item não encontrado no carrinho.");
        }
    }
};

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Blush",
        quantidade: 2,
        preco: 10
    },

    {
        id: 2,
        nome: "Base",
        quantidade: 1,
        preco: 40
    },

    {
        id: 3,
        nome: "Corretivo",
        quantidade: 3,
        preco: 15
    }
], 6, 95);

carrinho.adicionarItem({
    id: 2,
    nome: "Base",
    quantidade: 2,
    preco: 40
});

carrinho.adicionarItem({
    id: 4,
    nome: "Pó Compacto",
    quantidade: 1,
    preco: 30
});

console.log(carrinho);

carrinho.removerItem({
    nome: "Base",
    quantidade: 1
});

console.log(carrinho);

