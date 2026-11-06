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


// tamaño del texto: permite elegir entre pequeño, estándar y grande
const botonPequeno = document.querySelector("#pequeno");
const botonEstandar = document.querySelector("#estandar");
const botonGrande = document.querySelector("#grande");
const contenido = document.querySelector("main");

botonEstandar.classList.add("activo");
contenido.classList.add("texto-estandar");

botonPequeno.addEventListener("click", function() {
    contenido.classList.remove("texto-estandar");
    contenido.classList.remove("texto-grande");
    contenido.classList.add("texto-pequeno");

    botonPequeno.classList.add("activo");
    botonEstandar.classList.remove("activo");
    botonGrande.classList.remove("activo");
});

botonEstandar.addEventListener("click", function() {
    contenido.classList.remove("texto-pequeno");
    contenido.classList.remove("texto-grande");
    contenido.classList.add("texto-estandar");

    botonPequeno.classList.remove("activo");
    botonEstandar.classList.add("activo");
    botonGrande.classList.remove("activo");
});

botonGrande.addEventListener("click", function() {
    contenido.classList.remove("texto-pequeno");
    contenido.classList.remove("texto-estandar");
    contenido.classList.add("texto-grande");

    botonPequeno.classList.remove("activo");
    botonEstandar.classList.remove("activo");
    botonGrande.classList.add("activo");
});