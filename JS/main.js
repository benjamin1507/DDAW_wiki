// modo oscuro: cambia entre el tema claro y el oscuro
const botonModo = document.querySelector("#modo-oscuro");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});