let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("mousemove", () => {
    alert("voce passou o mouse aqui")
})

btn.addEventListener("mousedown", () => {
    alert("Apertou o botão do mouse");
});

btn.addEventListener("mouseup", () => {
    alert("Soltou o botão");
});

btn2.addEventListener("dblclick", () => {
    alert("Clicou duas vezes");
});

