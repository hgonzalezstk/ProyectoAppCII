'use strict'

const botonPnlRestaurantes = document.querySelector('#restaurantes');
const botonEditar = document.querySelector('#editar');

function linkPnlRestaurantes() {
    location.replace('pnlRestaurantes.html'); // cambiar por la pagina real 
}

function linkEditarPerfil() {
    location.replace("editarPerfil.html");
}

botonPnlRestaurantes.addEventListener('click', linkPnlRestaurantes);
botonEditar.addEventListener('click', linkEditarPerfil);