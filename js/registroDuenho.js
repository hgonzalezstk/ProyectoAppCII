'use strict';


const input_nombre = document.querySelector('#txt-nombre');
const input_apellidos = document.querySelector('#txt-apellidos');
const input_cedula = document.querySelector('#txt-cedula');
const input_correo = document.querySelector('#txt-correo');
const input_contrasenha = document.querySelector('#txt-contrasenha');
const input_contrasenha2 = document.querySelector('#txt-contrasenha2');
const input_avatar = document.querySelector('#file');

const botonRegistrarse = document.querySelector('#btn-registrar');

document.querySelector('#file').addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('avatar-profile', reader.result);
    })

    reader.readAsDataURL(this.files[0]);
})
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

const validarDatos = () => {
    let error = false;
    error = validar_vacios();
    let expReg_cedula = new RegExp('^[0-9]{2}\-[0-9]{4}\-[0-9]{4}$');
    if (!expReg_cedula.test(input_cedula.value)) {
        error = true;
        input_cedula.classList.add('error-input');
    } else {
        input_cedula.classList.remove('error-input');
    }
    let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');
    if (!expReg_Correo.test(input_correo.value)) {
        error = true;
        input_correo.classList.add('error-input');
    } else {
        input_correo.classList.remove('error-input');
    }
    if (input_contrasenha.value != input_contrasenha2.value) {
        error = true;
        input_correo.classList.add('error-input');
    } else {
        input_correo.classList.remove('error-input');
    }
    if (error) {
        Swal.fire({
            icon: 'warning',
            title: 'Hubo un error en la informacion ingresada',
            text: 'Por favor revise los campos resaltados en rojo'
        });
    } else {
        obtenerDatos()
        location.replace('../html/perfilDuenho.html');
    }
}
const obtenerDatos = () => {
    let nombre = input_nombre.value;
    let apellidos = input_apellidos.value;
    let cedula = input_cedula.value;
    let correo = input_correo.value;
    let contrasenha = input_contrasenha.value;
    let contrasenha2 = input_contrasenha2.value;
    let avatar = input_avatar.value;

    console.log(`El nombre del dueño es: ${nombre}.`);
    console.log(`Los apellidos del dueño son:  ${apellidos}.`);
    console.log(`La cédula es: ${cedula}.`);
    console.log(`La contraseña es ${contrasenha}.`);
    console.log(`Verificar la contraseña ${contrasenha2}.`);
    console.log(`El correo es ${correo}.`);
    console.log(`La fotografia del dueño es: ${avatar}.`);
    Swal.fire({
        'icon': 'success',
        'title': '¡¡¡Felicidades!!!',
        'text': 'Se ha registrado como dueño de restaurantes'
    }).then(() => {
        limpiar();
    });
};
const limpiar = () => {
    input_nombre.value = "";
    input_apellidos.value = "";
    input_cedula.value = "";
    input_correo.value = "";
    input_contrasenha.value = "";
    input_contrasenha2.value = "";
    input_avatar.value = "";
}

botonRegistrarse.addEventListener('click', validarDatos);