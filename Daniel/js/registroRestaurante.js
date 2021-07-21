'use strict';


const input_nombreGeneral = document.querySelector('#txt-nombreGeneral');
const input_nombreComercial = document.querySelector('#txt-nombreComercial');
const input_cedJuridica = document.querySelector('#txt-cedulaJuridica');
const input_telefono = document.querySelector('#txt-telefono');
const input_telefono2 = document.querySelector('#txt-telefono2');
const input_correo = document.querySelector('#txt-correo');
const input_capacidadMax = document.querySelector('#txt-capacidadMax');
const input_aforo = document.querySelector('#txt-aforo');
const input_aperturaL = document.querySelector('#lunes-apertura');
const input_cierreL = document.querySelector('#lunes-cierre');
const input_aperturaK = document.querySelector('#martes-apertura');
const input_cierreK = document.querySelector('#martes-cierre');
const input_aperturaM = document.querySelector('#miercoles-apertura');
const input_cierreM = document.querySelector('#miercoles-cierre');
const input_aperturaJ = document.querySelector('#jueves-apertura');
const input_cierreJ = document.querySelector('#jueves-cierre');
const input_aperturaV = document.querySelector('#viernes-apertura');
const input_cierreV = document.querySelector('#viernes-cierre');
const input_aperturaS = document.querySelector('#sabado-apertura');
const input_cierreS = document.querySelector('#sabado-cierre');
const input_aperturaD = document.querySelector('#domingo-apertura');
const input_cierreD = document.querySelector('#domingo-cierre');
const input_aperturaE = document.querySelector('#especiales-apertura');
const input_cierreE = document.querySelector('#especiales-cierre');
const input_provincia = document.querySelector('#slct-provincia');
const input_canton = document.querySelector('#slct-canton');
const input_distrito = document.querySelector('#slct-distrito');
const textarea_senhas = document.querySelector('#txta-senhas');
const input_latitud = document.querySelector('#txt-latitud');
const input_longitud = document.querySelector('#txt-longitud');
const input_fb = document.querySelector('#lnk-fb');
const input_insta = document.querySelector('#lnk-insta');
const input_twtr = document.querySelector('#lnk-twtr');

const input_fotoRest = document.querySelector('#file');

const botonContinuar = document.querySelector('#btn-continuar');

document.querySelector('#file').addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('avatar-profile', reader.result);
    })

    reader.readAsDataURL(this.files[0]);
})
const validarDatos = () => {
    let error = validar_vacios();
    let expReg_cedJuridica = new RegExp('^[2-5]{1}\-[0-9]{3}\-[0-9]{6}$');
    if (!expReg_cedJuridica.test(input_cedJuridica.value)) {
        error = true;
        input_cedJuridica.classList.add('error-input');
    } else {
        input_cedJuridica.classList.remove('error-input');
    }
    let expReg_Telefono = new RegExp('^[0-9]{8}$');
    if (!expReg_Telefono.test(input_telefono.value)) {
        error = true;
        input_telefono.classList.add('error-input');
    } else {
        input_telefono.classList.remove('error-input');
    }
    if (!expReg_Telefono.test(input_telefono2.value)) {
        error = true;
        input_telefono.classList.add('error-input');
    } else {
        input_telefono.classList.remove('error-input');
    }
    let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');
    if (!expReg_Correo.test(input_correo.value)) {
        error = true;
        input_correo.classList.add('error-input');
    } else {
        input_correo.classList.remove('error-input');
    }
    let expReg_soloNumeros = /^[0-9]+$/;
    if (!expReg_soloNumeros.test(input_capacidadMax.value)) {
        error = true;
        input_capacidadMax.classList.add('error-input');
    } else {
        input_capacidadMax.classList.remove('error-input');
    }
    if (!expReg_soloNumeros.test(input_aforo.value)) {
        error = true;
        input_aforo.classList.add('error-input');
    } else {
        input_aforo.classList.remove('error-input');
    }
    if (error) {
        Swal.fire({
            icon: 'warning',
            title: 'Hubo un error en la informacion ingresada',
            text: 'Por favor revise los campos resaltados en rojo'
        });
    } else {
        obtenerDatos()
    }
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

const obtenerDatos = () => {
    let nombreGeneral = input_nombreGeneral.value;
    let nombreComercial = input_nombreComercial.value;
    let cedJuridica = input_cedJuridica.value
    let telefono = input_telefono.value;
    let telefono2 = input_telefono2.value;
    let correo = input_correo.value;
    let capacidadMax = input_capacidadMax.value;
    let aforo = input_aforo.value;
    let aperturaL = input_aperturaL.value;
    let cierreL = input_cierreL.value;
    let aperturaK = input_aperturaK.value;
    let cierreK = input_cierreK.value;
    let aperturaM = input_aperturaM.value;
    let cierreM = input_cierreM.value;
    let aperturaJ = input_aperturaJ.value;
    let cierreJ = input_cierreJ.value;
    let aperturaV = input_aperturaV.value;
    let cierreV = input_cierreV.value;
    let aperturaS = input_aperturaS.value;
    let cierreS = input_cierreS.value;
    let aperturaD = input_aperturaD.value;
    let cierreD = input_cierreD.value;
    let aperturaE = input_aperturaE.value;
    let cierreE = input_cierreE.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let senhasEspecificas = textarea_senhas.value;
    let latitud = input_latitud.value;
    let longitud = input_latitud.value;
    let fotoRest = input_fotoRest.value;
    let fb = input_fb.value;
    let insta = input_insta.value;
    let twtr = input_twtr.value;
    console.log(`El nombre general del restaurante es: ${nombreGeneral}.`);
    console.log(`El cEl nombre comercial del restaurante es:  ${nombreComercial}.`);
    console.log(`La cédula jurídica es: ${cedJuridica}.`);
    console.log(`El teléfono es ${telefono}.`);
    console.log(`El segundo teléfono es ${telefono2}.`);
    console.log(`El correo es ${correo}.`);
    console.log(`La capacidad máxima es: ${capacidadMax}.`);
    console.log(`El aforo permitido es: ${aforo}.`);
    console.log(`La hora de apertura los lunes es: ${aperturaL}.`);
    console.log(`La hora de cierre los lunes es: ${cierreL}.`);
    console.log(`La hora de apertura los martes es: ${aperturaK}.`);
    console.log(`La hora de cierre los martes es: ${cierreK}.`);
    console.log(`La hora de apertura los miércoles es: ${aperturaM}.`);
    console.log(`La hora de cierre los miércoles es: ${cierreM}.`);
    console.log(`La hora de apertura los jueves es: ${aperturaJ}.`);
    console.log(`La hora de cierre los jueves es: ${cierreJ}.`);
    console.log(`La hora de apertura los viernes es: ${aperturaV}.`);
    console.log(`La hora de cierre los viernes es: ${cierreV}.`);
    console.log(`La hora de apertura los sábados es: ${aperturaS}.`);
    console.log(`La hora de cierre los sábados es: ${cierreS}.`);
    console.log(`La hora de apertura los domingos es: ${aperturaD}.`);
    console.log(`La hora de cierre los domingos es: ${cierreD}.`);
    console.log(`La hora de apertura los días especiales y feriados es: ${aperturaE}.`);
    console.log(`La hora de cierre los días especiales y feriados es: ${cierreE}.`);
    console.log(`La provincia donde se localiza el restaurante es: ${provincia}.`);
    console.log(`El cantón donde se localiza el restaurante es: ${canton}.`);
    console.log(`El distrito donde se localiza el restaurante es: ${distrito}.`);
    console.log(`Las señas especificas para llegar al restaurante son: ${senhasEspecificas}.`);
    console.log(`La latitud del restaurante es: ${latitud}.`);
    console.log(`La longitud del restaurante es: ${longitud}.`);
    console.log(`La fotografia del restaurante es: ${fotoRest}.`);
    console.log(`El link para el perfil de Facebook del restaurante es: ${fb}.`);
    console.log(`El link para el perfil de Instagram del restaurante es: ${insta}.`);
    console.log(`El link para el perfil de Twitter del restaurante es: ${twtr}.`);
    Swal.fire({
        'icon': 'success',
        'title': 'Su restaurante se ha registrado',
        'text': 'A continuacion seguiremos con el registro del gerente'
    }).then(() => {
        limpiar();
    });
};
const limpiar = () => {
    input_nombreGeneral.value = "";
    input_nombreComercial.value = "";
    input_cedJuridica.value = "";
    input_telefono.value = "";
    input_telefono2.value = "";
    input_correo.value = "";
    input_capacidadMax.value = "";
    input_aforo.value = "";
    input_aperturaL.value = "";
    input_cierreL.value = "";
    input_aperturaK.value = "";
    input_cierreK.value = "";
    input_aperturaM.value = "";
    input_cierreM.value = "";
    input_aperturaJ.value = "";
    input_cierreJ.value = "";
    input_aperturaV.value = "";
    input_cierreV.value = "";
    input_aperturaS.value = "";
    input_cierreS.value = "";
    input_aperturaD.value = "";
    input_cierreD.value = "";
    input_aperturaE.value = "";
    input_cierreE.value = "";
    input_provincia.value = "";
    input_canton.value = "";
    input_distrito.value = "";
    textarea_senhas.value = "";
    input_latitud.value = "";
    input_longitud.value = "";
    input_fotoRest.value = "";
    input_fb.value = "";
    input_insta.value = "";
    input_twtr.value = "";
}
botonContinuar.addEventListener('click', validarDatos);