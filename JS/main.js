
/* buscar los elementos que vamos a utilizar */
const indice = document.querySelector("#indice");
const titulos = document.querySelectorAll("main section h2");

const botonModo = document.querySelector("#modo-oscuro");
const botonPequeno = document.querySelector("#pequeno");
const botonEstandar = document.querySelector("#estandar");
const botonGrande = document.querySelector("#grande");
const contenido = document.querySelector("main");

const formulario = document.querySelector("#formulario-comentarios");
const nombre = document.querySelector("#nombre");
const comentario = document.querySelector("#comentario");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");
const listaComentarios = document.querySelector("#lista-comentarios");


/* generar el índice automáticamente */
titulos.forEach(function(titulo) {
    const elemento = document.createElement("li");
    const enlace = document.createElement("a");

    enlace.href = "#" + titulo.id;
    enlace.textContent = titulo.textContent;

    elemento.append(enlace);
    indice.append(elemento);
});


/* cambiar entre modo claro y modo oscuro */
botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});


/* cambiar el tamaño del texto del artículo */
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


/* plegar y desplegar las secciones del artículo */
const secciones = document.querySelectorAll("main section");

secciones.forEach(function(seccion) {
    const titulo = seccion.querySelector("h2");
    const contenido = seccion.querySelector(".contenido-seccion");
    const flecha = document.createElement("span");

    flecha.textContent = " ▾";
    titulo.append(flecha);

    titulo.addEventListener("click", function() {
        contenido.classList.toggle("oculto");

        if (contenido.classList.contains("oculto")) {
            flecha.textContent = " ▸";
        } else {
            flecha.textContent = " ▾";
        }
    });
});


/* quitar los errores cuando se corrigen los campos */
nombre.addEventListener("input", function() {
    if (nombre.value.trim() !== "") {
        nombre.classList.remove("error");
    }

    if (nombre.value.trim() !== "" && comentario.value.trim().length >= 10 && comentario.value.length <= 200) {
        mensaje.textContent = "";
    }
});


/* actualizar el contador de caracteres */
comentario.addEventListener("input", function() {
    contador.textContent = comentario.value.length + " / 200";

    if (comentario.value.trim().length >= 10 && comentario.value.length <= 200) {
        comentario.classList.remove("error");
    }

    if (nombre.value.trim() !== "" && comentario.value.trim().length >= 10 && comentario.value.length <= 200) {
        mensaje.textContent = "";
    }
});


/* validar el formulario y agregar los comentarios */
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombreIngresado = nombre.value.trim();
    const comentarioIngresado = comentario.value.trim();

    let valido = true;

    mensaje.textContent = "";
    nombre.classList.remove("error");
    comentario.classList.remove("error");

    if (nombreIngresado === "") {
        mensaje.textContent = "El nombre no puede estar vacío.";
        nombre.classList.add("error");
        valido = false;
    }

    if (comentarioIngresado.length < 10 || comentario.value.length > 200) {
        mensaje.textContent = mensaje.textContent + " El comentario debe tener entre 10 y 200 caracteres.";
        comentario.classList.add("error");
        valido = false;
    }

    if (valido === false) {
        return;
    }

    const nuevoComentario = document.createElement("li");
    const nombreComentario = document.createElement("strong");
    const textoComentario = document.createElement("span");

    nombreComentario.textContent = nombreIngresado;
    textoComentario.textContent = ": " + comentarioIngresado;

    nuevoComentario.append(nombreComentario);
    nuevoComentario.append(textoComentario);

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.classList.add("borrar");

    nuevoComentario.append(botonBorrar);
    listaComentarios.append(nuevoComentario);

    formulario.reset();
    contador.textContent = "0 / 200";
});


/* eliminar únicamente el comentario seleccionado */
listaComentarios.addEventListener("click", function(e) {
    if (e.target.classList.contains("borrar")) {
        e.target.parentElement.remove();
    }
});
