'use strict'

const botonReservacion = document.querySelector('#btn-reserva');
const botonVegetariano = document.querySelector('#editar');
const botonVegano = document.querySelector('#editar');
const botonBocas = document.querySelector('#editar');
const botonPostres = document.querySelector('#editar');


const linkReservaciones = () => {
    location.replace('register-reservation.html'); // cambiar por la pagina real 
}

function linkVegetariano() {
    location.replace("menuVegetariano.html");
}

function linkVegano() {
    location.replace("menuVegano.html");
}

function linkBocas() {
    location.replace("menuBocas.html");
}

function linkPostres() {
    location.replace("menuPostres.html");
}

function linkBebidas() {
    location.replace("menuBebidas.html");
}

botonReservacion.addEventListener('click', linkReservaciones);
botonVegetariano.addEventListener('click', linkVegetariano);
botonVegano.addEventListener('click', linkVegano);
botonBocas.addEventListener('click', linkBocas);
botonPostres.addEventListener('click', linkPostres);
botonBebidas.addEventListener('click', linkBebidas);