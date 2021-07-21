//-----------------Implementar el modo estricto en todos los JS-----------------
'use strict';

//-----------------MENU NAV-----------------
const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
})

//Referencia de los campos HTMLs. (Elementos como tal, no su valor)
const input_nombre = document.querySelector('#login-email');
const input_contrasenna = document.querySelector('#login-password');
const boton_ingresar = document.querySelector('#btn-login');

const obtenerDatos = () => {
    console.log(`El nombre es ${input_nombre.value}`);
    console.log(`La contraseña es: ${input_contrasenna.value}`);
};

boton_ingresar.addEventListener('click', obtenerDatos);