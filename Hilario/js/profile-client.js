'use strict';

const txtNombre = document.querySelector("#txt-nombre");
const txtApellido = document.querySelector("#txt-apellido");
const txtIdentificacion = document.querySelector("#txt-identificacion");
const txtCorreoElectronico = document.querySelector("#txt-correo-electronico");
const txtFechaNacimiento = document.querySelector("#txt-fecha-nacimiento");

// const imgProfile = document.querySelector('#avatar-logo');

//Cargamos imagen perfil
document.addEventListener('DOMContentLoaded', () => {
    const imgProfile = localStorage.getItem('avatar-profile');

    if (imgProfile) {
        document.querySelector('#avatar-logo').setAttribute('src', imgProfile);
    }
})

const cargarDatosPerfil = () => {

    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    let identificacion = localStorage.getItem('identificacion');
    let correoElectronico = localStorage.getItem('correoElectronico');
    let fechaNacimiento = localStorage.getItem('fechaNacimiento');




    txtNombre.value = nombre;
    txtApellido.value = apellido;
    txtIdentificacion.value = identificacion;
    txtCorreoElectronico.value = correoElectronico;
    txtFechaNacimiento.value = fechaNacimiento;

}

cargarDatosPerfil();