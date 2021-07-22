"use strict";

const botonComentario = document.querySelector("#boton-enviar");
const txtComentario = document.querySelector("#txt-comentario")

const borrarInfo = () => {

    var comentario = txtComentario.value;

    comentario = "";

}

const anadirInfo = () => {

    var comentario = txtComentario.value;

    console.log("El comentario dado por el usuario es: " + comentario);

    Swal.fire({
        icon: "success",
        title: "Apreciamos tu comentario",
        text: "Tu comentario ha sido recibido exitosamente",
    }).then(() => {
        anadirInfo;
    })

}

const validacionInfo = () => {

    var comentario = txtComentario.value;
    var error = false;

    if (comentario === "") {
        error = true;
        txtComentario.classList.add("error-input");
    } else {
        txtComentario.classList.remove("error-input");
    }

    if (error) {
        Swal.fire({
            icon: "warning",
            title: "Por favor ingresa un comentario",
            text: "Por favor añada un comentario",
        });
    } else {
        anadirInfo();
    }
};

botonComentario.addEventListener("click", validacionInfo);