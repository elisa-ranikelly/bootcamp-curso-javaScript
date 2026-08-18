let nomes = ["Elisa", "Maria", "João", "Pedro", "Ana"].map(n => n.toLowerCase());

for(let i = 0; i < nomes.length; i++) {
    if(nomes[i] === "elisa"){
        console.log(`O nome ${nomes[i]} está na lista!`);
    }
}

if(nomes.includes("elisa")){
    console.log("O nome Elisa está na lista!");
}