"use strict";

const botonEnviar = document.querySelector("#button");
const nombreUsuario = document.querySelector("#tabla");
const nombreApellidos = document.querySelector("#fapellido");
const nombreCorreo = document.querySelector("#femail");
const tipoCliente = document.querySelector("#ffechanacimiento");
const consultaCliente = document.querySelector("#fconsulta");

const borrarInfo = () => {

    var nombre = nombreUsuario.value;
    var apellidos = nombreApellidos.value;
    var correo = nombreCorreo.value;
    var tipo = tipoCliente.value;
    var consulta = consultaCliente.value;

    nombre = "";
    apellidos = "";
    correo = "";
    tipo = "";
    consulta = "";
}

const anadirInfo = () => {

    var nombre = nombreUsuario.value;
    var apellidos = nombreApellidos.value;
    var correo = nombreCorreo.value;
    var tipo = tipoCliente.value;
    var consulta = consultaCliente.value;

    console.log("El comentario dado por el usuario es: " + nombre);
    console.log("El comentario dado por el usuario es: " + apellidos);
    console.log("El comentario dado por el usuario es: " + correo);
    console.log("El comentario dado por el usuario es: " + tipo);
    console.log("El comentario dado por el usuario es: " + consulta);

    Swal.fire({
        icon: "success",
        title: "Hemos recibido tu información",
        text: "Pronto se le estará contactando",
    }).then(() => {
        anadirInfo;
    })

};

const validacionInfo = () => {

    var nombre = nombreUsuario.value;
    var apellidos = nombreApellidos.value;
    var correo = nombreCorreo.value;
    var tipo = tipoCliente.value;
    var consulta = consultaCliente.value;

    console.log("El nombre del usuario es: " + nombre);
    console.log("El apellido del usuario es: " + apellidos);
    console.log("El correo dado por el usuario es: " + correo);
    console.log("El tipo de cliente es: " + tipo);
    console.log("La consulta del usuario es: " + consulta);
    var error = false;

    var validacionNombre = /[a-zA-Z]/;
    if (!validacionNombre.test(nombre)) {
        error = true;
        nombreUsuario.classList.add("error-input");
    } else {
        nombreUsuario.classList.remove("error-input");
    }

    var validacionApellido = /[a-zA-Z]/;
    if (!validacionApellido.test(apellidos)) {
        error = true;
        nombreApellidos.classList.add("error-input");
    } else {
        nombreApellidos.classList.remove("error-input");
    }

    var validacionCorreo =
        /^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|co.cr|)$/;
    if (!validacionCorreo.test(correo)) {
        error = true;
        nombreCorreo.classList.add("error-input");
    } else {
        nombreCorreo.classList.remove("error-input");
    }

    var validaciontipoCliente = /[a-zA-Z]/;
    if (!validaciontipoCliente.test(tipo)) {
        error = true;
        tipoCliente.classList.add("error-input");
    } else {
        tipoCliente.classList.remove("error-input");
    }

    if (consulta === "") {
        error = true;
        consultaCliente.classList.add("error-input");
    } else {
        consultaCliente.classList.remove("error-input");
    }
    if (error) {
        Swal.fire({
            icon: "warning",
            title: "Por favor ingresa toda la información",
            text: "Necesitamos todos tus detalles de contacto",
        });
    } else {
        anadirInfo();
    }
};

botonEnviar.addEventListener("click", validacionInfo);