let btn = document.querySelector("#btn1");
let p = document.querySelector("p");

function msg(e){
    alert("Clicou em mim");
    e.stopPropagation();
}

btn.addEventListener("click", msg);

p.addEventListener("click", () => {
    alert("clicou no paragrafo");
});