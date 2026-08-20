window.addEventListener("load", () => {
    alert("Carregando...");
})

window.addEventListener("beforeunload", () => {
    event.returnValue = null;
})