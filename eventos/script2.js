let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
    alert("Clicou em mim!");
};

btn1.addEventListener("click", mgs);

btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg);
});