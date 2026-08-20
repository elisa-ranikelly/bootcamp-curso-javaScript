let btn = document.querySelector("#btn1");
function msg(e){
    console.log(e);
    alert("Clicou em mim!")
}

btn.addEventListener("click", msg);
