'use strict';
var message;

function get_field(id) {
    var field = document.getElementById(id).value;
    return field;
}

function registration() {

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    //var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var name_field = ["nombre", "apellidos", "restaurante", "telefono"];

    var id_field = ["txt-nombre", "txt-apellidos", "txt-restaurante", "txt-telefono"];
    var failed_message = ["Por favor ingrese su nombre", "Por favor ingrese su apellido", "Por favor ingrese un nombre de restaurante", "Por favor ingrese un numero valido"];
    for (var i = 0; i < id_field.length; i++) {
        var id = id_field[i];
        var name = name_field[i];
        var error_message = failed_message[i];

        var texto = get_field(id);
        txt_validation(texto, error_message, name);
        clearField(id);
    }
    //alert('Solo puede ingresar caracteres alfabeticos');
    //window.location = "http://127.0.0.1:5501/paginaweb/html/perfil_gerente.html";
    //alert('Por favor ingrese un numero valido');

    show_alert();

}

function txt_validation(texto, message_validation, field) {
    var letters = /^[A-Za-z]+$/;
    if (texto.lenght == 0) {
        message = "Por favor ingrese " + field;
    } else {
        if (!letters.test(texto)) {
            if (message.lenght == 0) {
                message = message_validation;
            } else {
                message = message + "/nPor favor ingrese un numero valido";
            }

        }
    }

}

function show_alert() {
    if (message.lenght == 0) {
        message = 'Gracias por su registrarse con nosotros';
    }
    alert(message);
}

function clearField(id) {
    document.getElementById(id).value = "";
}