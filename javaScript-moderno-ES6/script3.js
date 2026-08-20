const produtos = [
    {nome: "Camisa", preco: 20.00, categoria: "Roupa"},
    {nome: "Celular", preco: 2.459, categoria: "Eletrônico"},
    {nome: "Bolacha", preco: 3.99, categoria: "Comida"},
];

produtos.map((produto) => {
    if(produto.categoria === "Roupa"){
        produto.promocao = true;
    }
});

console.log(produtos);