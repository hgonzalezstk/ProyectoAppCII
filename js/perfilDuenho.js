'use strict'

const botonPnlRestaurantes = document.querySelector('#restaurantes');
const botonEditar = document.querySelector('#registrar-restaurante');

const linkPnlRestaurantes = () => {
    location.replace('pnlRestaurantes.html'); // cambiar por la pagina real 
}

const linkEditarPerfil = () => {
    location.replace("registroRestaurante.html");
}

botonPnlRestaurantes.addEventListener('click', linkPnlRestaurantes);
botonEditar.addEventListener('click', linkEditarPerfil);