'use strict';

const tipoTarjeta = document.querySelector("#sel-tarjeta");
const numeroTarjeta = document.querySelector("#txt-numero-tarjeta");
const titular = document.querySelector("#txt-titular");
const fechaVencimiento = document.querySelector("#txt-fecha-vencimiento");
const codigoSefuridad = document.querySelector("#txt-codigo-cvc");

const botonAgregar = document.querySelector("#btn-guardar");


//variable para almacenar las  reservas
var tarjetasActivas = new Array();
const tablaTarjetas = document.querySelector("#tbl-tarjetas tbody");


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

const limpiar = () => {
    tipoTarjeta.value = "";
    numeroTarjeta.value = "";
    titular.value = "";
    fechaVencimiento.value = "";
    codigoSefuridad.value = "";
}

const obtenerDatos = () => {

    let error = false;
    error = validar_vacios();

    console.log(tipoTarjeta);
    console.log(numeroTarjeta);
    console.log(titular);
    console.log(fechaVencimiento);
    console.log(codigoSefuridad);

    //agregar el elemento al arreglo

    let nuevaTarjeta = {
        id: tarjetasActivas.length + 1,
        tipo: tipoTarjeta.value,
        numero: numeroTarjeta.value,
        titular: titular.value,
        vencimiento: fechaVencimiento.value,
        codigo: codigoSefuridad.value
    };
    tarjetasActivas.push(nuevaTarjeta);
    console.log('nueva tarjeta', nuevaTarjeta);
    console.log(tarjetasActivas);
    if (error) {
        Swal.fire({
            icon: 'warning',
            title: '¡Oops!',
            text: "Nos faltan unos datos para poder continuar."
        });
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
        })
        llenar_tabla();
    }
    limpiar();


};

const llenar_tabla = () => {

    //borrar el contenido del cuerpo de la tabla
    tablaTarjetas.innerHTML = "";
    //empecemos a crear el contenido
    for (let i = 0; i < tarjetasActivas.length; i++) {
        let fila = tablaTarjetas.insertRow(); //crea el tr
        //agregar las columnas

        fila.insertCell().innerHTML = tarjetasActivas[i].id;
        fila.insertCell().innerHTML = tarjetasActivas[i].tipo;
        fila.insertCell().innerHTML = tarjetasActivas[i].numero;
        fila.insertCell().innerHTML = tarjetasActivas[i].titular;
        fila.insertCell().innerHTML = tarjetasActivas[i].vencimiento;
        fila.insertCell().innerHTML = tarjetasActivas[i].codigo;

    }

}

botonAgregar.addEventListener('click', obtenerDatos);