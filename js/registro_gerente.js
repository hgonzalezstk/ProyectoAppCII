'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const input_apellidos = document.querySelector('#txt-apellidos');
const input_restaurante = document.querySelector('#txt-restaurante');
const input_telefono = document.querySelector('#txt-telefono');
const input_terminos = document.querySelector('#checkbox');

const botonRegistro = document.querySelector('#btn-registro');

var message;

function get_field(id) {
    var field = document.getElementById(id).value;
    return field;
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

const validarDatos = () => {
    let error = false;
    error = validar_vacios();
    let expReg_telefono = new RegExp('^[0-9]{8}$');
    if (!expReg_telefono.test(input_telefono.value)) {
        error = true;
        input_telefono.classList.add('error-input');
    } else {
        input_telefono.classList.remove('error-input');
    }
    // let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');
    // if (!expReg_Correo.test(input_correo.value)) {
    //     error = true;
    //     input_correo.classList.add('error-input');
    // } else {
    //     input_correo.classList.remove('error-input');
    // }
    // if (input_contrasenha.value != input_contrasenha2.value) {
    //     error = true;
    //     input_correo.classList.add('error-input');
    // } else {
    //     input_correo.classList.remove('error-input');
    // }
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
    let restaurante = input_restaurante.value;
    let telefono = input_telefono.value;


    console.log(`El nombre del dueño es: ${nombre}.`);
    console.log(`Los apellidos del dueño son:  ${apellidos}.`);
    console.log(`El restaurante se llam:  ${restaurante}.`);
    console.log(`El telefono es:  ${telefono}.`);

    Swal.fire({
        'icon': 'success',
        'title': '¡¡¡Felicidades!!!',
        'text': 'Registro del Gerente completado con exito'
    }).then(() => {
        limpiar();
    });
};
const limpiar = () => {
    input_nombre.value = "";
    input_apellidos.value = "";
    input_restaurante.value = "";
    input_telefono.value = "";
}

botonRegistro.addEventListener('click', validarDatos);


//========================================//

// function registration() {

//     //email id expression code
//     var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//     //var letters = /^[A-Za-z]+$/;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var name_field = ["nombre", "apellidos", "restaurante", "telefono"];

//     var id_field = ["txt-nombre", "txt-apellidos", "txt-restaurante", "txt-telefono"];
//     var failed_message = ["Por favor ingrese su nombre", "Por favor ingrese su apellido", "Por favor ingrese un nombre de restaurante", "Por favor ingrese un numero valido"];
//     for (var i = 0; i < id_field.length; i++) {
//         var id = id_field[i];
//         var name = name_field[i];
//         var error_message = failed_message[i];

//         var texto = get_field(id);
//         txt_validation(texto, error_message, name);
//         clearField(id);
//     }
//     //alert('Solo puede ingresar caracteres alfabeticos');
//     //window.location = "http://127.0.0.1:5501/paginaweb/html/perfil_gerente.html";
//     //alert('Por favor ingrese un numero valido');

//     show_alert();

// }

// function txt_validation(texto, message_validation, field) {
//     var letters = /^[A-Za-z]+$/;
//     if (texto.lenght == 0) {
//         message = "Por favor ingrese " + field;
//     } else {
//         if (!letters.test(texto)) {
//             if (message.lenght == 0) {
//                 message = message_validation;
//             } else {
//                 message = message + "/nPor favor ingrese un numero valido";
//             }

//         }
//     }

// }

// function show_alert() {
//     if (message.lenght == 0) {
//         message = 'Gracias por su registrarse con nosotros';
//     }
//     alert(message);
// }

// function clearField(id) {
//     document.getElementById(id).value = "";
// }