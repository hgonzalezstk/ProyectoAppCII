'use strict';


const txtToken = document.querySelector('#txt-token');
const txtIdentificacion = document.querySelector("#txt-identificacion");
const txtContrasenna = document.querySelector('#txt-contrasenna');

const botonCrear = document.querySelector('#btn-confirm');

const limpiar = () => {
    txtToken.value = "";
    txtIdentificacion.value = "";
    txtContrasenna.value = "";
}

const validar_vacios = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll(':required');
    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });
    return error;
}


const crearCuenta = () => {
    let error = false;
    error = validar_vacios();


    //si existe un error, no siga y alerte al usuario
    if (error) {
        Swal.fire({
            icon: 'warning',
            title: '¡Oops!',
            text: "Nos faltan unos datos para poder continuar."
        });
    } else {
        //si no hubo error. continue el proceso
    }
}

const validarDatos = () => {
    let error = false;
    error = validar_vacios();

    let expReg_token = /^[A-Za-z0-9]{6}$/;
    //Validar si el nombres es vacio
    if (!expReg_token.test(txtToken.value)) {
        error = true;
        txtToken.classList.add('error-input');
    } else {
        txtToken.classList.remove('error-input');
    }

    let expReg_soloNumeros = /^[0-9]+$/;
    //Validar si el identificacion es vacio
    if (!expReg_soloNumeros.test(txtIdentificacion.value)) {
        error = true;
        txtIdentificacion.classList.add('error-input');
    } else {
        txtIdentificacion.classList.remove('error-input');
    }

    //si existe un error, no siga y alerte al usuario
    if (error) {
        Swal.fire({
            icon: 'warning',
            title: '¡Oops!',
            text: "Nos faltan unos datos para poder continuar."
        });
    } else {
        //si no hubo error. continue el proceso
        almacenarDatos();
        crearCuenta();
        limpiar();
        location.replace('../html/perfil-cliente.html');
    }
}

const almacenarDatos = () => {
    localStorage.setItem('identificacion', txtIdentificacion.value);
    localStorage.setItem('contrasenna', txtContrasenna.value);
}

async function cargarFoto() {
    const { value: file } = await Swal.fire({
        title: 'Select image',
        input: 'file',
        inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
        }
    })

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            Swal.fire({
                title: 'Your uploaded picture',
                imageUrl: e.target.result,
                imageAlt: 'The uploaded picture'
            })
        }
        reader.readAsDataURL(file)
    }
}

botonCrear.addEventListener('click', validarDatos);