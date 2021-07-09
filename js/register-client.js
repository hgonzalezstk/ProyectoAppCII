'use strict';

const txtNombre = document.querySelector("#txt-nombre");
const txtApellido = document.querySelector("#txt-apellido");
const txtIdentificacion = document.querySelector("#txt-identificacion");
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
    let nombres = txtNombre.value;
    let apellidos = txtApellido.value;
    let identificacion = txtIdentificacion.value;
    let correoElectronico = txtCorreoElectronico.value;
    let fechaNacimiento = txtFechaNacimiento.value;

    console.log(nombres);
    console.log(apellidos);
    console.log(identificacion);
    console.log(correoElectronico);
    console.log(fechaNacimiento);

    Swal.fire({
        title: 'Bienvenido',
        // text: 'Solo necesitamos que confirme su dirección de correo electrónico y termine de configurar una nueva cuenta de ReZervo que creamos solo para usted. ¡Puedes hacerlo súper rápido!',
        html: '<b>Revise su buzón de correo electrónico</b>' + '<br><br>' + 'Acabamos de enviar un enlace de confirmación a ' + '<b>' + correoElectronico + '</b>' + ' .Verifique su dirección y lo configuraremos todo.',

        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

    //si existe un error, no siga y alerte al usuario
    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar su mensaje',
            "text": "Por favor revise los campos resaltados en rojo"
        });
    } else {
        //si no hubo error. continue el proceso
        registrarDatosCliente()
    }


}

const validarDatos = () => {
    let error = false;
    error = validar_vacios();
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
            title: 'No se pudo enviar su mensaje',
            text: "Por favor revise los campos resaltados en rojo"
        });
    } else {
        //si no hubo error. continue el proceso
        registrarDatosCliente();

    }
    limpiar();
}


botonEnviar.addEventListener('click', validarDatos);