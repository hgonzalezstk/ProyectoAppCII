'use strict';

const txtNombre = document.querySelector("#txt-nombre");
const txtApellido = document.querySelector("#txt-apellido");
// const txtIdentificacion = document.querySelector("#txt-identificacion");
const txtCorreoElectronico = document.querySelector("#txt-correo-electronico");
const txtFechaNacimiento = document.querySelector("#txt-fecha-nacimiento");


const botonEnviar = document.querySelector("#btn-registrar");

const limpiar = () => {
    txtNombre.value = "";
    txtApellido.value = "";
    txtIdentificacion.value = "";
    txtCorreoElectronico.value = "";
    txtFechaNacimiento.value = "";
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

const registrarDatosCliente = () => {

    let error = false;
    error = validar_vacios();

    let correoElectronico = txtCorreoElectronico.value;

    let timerInterval
    Swal.fire({
        title: 'Bienvenido!',
        html: '<b>Revise su buzón de correo electrónico</b>' + '<br><br>' + 'Acabamos de enviar un enlace de confirmación a ' + '<b>' + correoElectronico + '</b>' + ' .Verifique su dirección y lo configuraremos todo.',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
            location.replace('../html/confirm-client.html')
        }
    })

}

const validarDatos = () => {
    let error = false;
    error = validar_vacios();

    let expReg_soloLetras = /^[a-z]+$/i;
    //Validar si el nombres es vacio
    if (!expReg_soloLetras.test(txtNombre.value)) {
        error = true;
        txtNombre.classList.add('error-input');
    } else {
        txtNombre.classList.remove('error-input');
    }

    //Validar si el Apellidos es vacio
    if (!expReg_soloLetras.test(txtApellido.value)) {
        error = true;
        txtApellido.classList.add('error-input');
    } else {
        txtApellido.classList.remove('error-input');
    }

    let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');
    //Validar si el correo es vacio
    if (!expReg_Correo.test(txtCorreoElectronico.value)) {
        error = true;
        txtCorreoElectronico.classList.add('error-input');
    } else {
        txtCorreoElectronico.classList.remove('error-input');
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
        registrarDatosCliente();
    }
    limpiar();
}

const almacenarDatos = () => {
    localStorage.setItem('nombre', txtNombre.value);
    localStorage.setItem('apellido', txtApellido.value);
    localStorage.setItem('correoElectronico', txtCorreoElectronico.value);
    localStorage.setItem('fechaNacimiento', txtFechaNacimiento.value);
}

botonEnviar.addEventListener('click', validarDatos);