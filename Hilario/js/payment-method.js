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

const obtenerDatos = () => {
    console.log(tipoTarjeta);
    console.log(numeroTarjeta);
    console.log(titular);
    console.log(fechaVencimiento);
    console.log(codigoSefuridad);

    //agregar el elemento al arreglo
    //let nuevo_item = [reservas_activas.length + 1, input_fecha.value, sel_salon.value, input_cant_personas.value];
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
    llenar_tabla();
};

const llenar_tabla = () => {
    //borrar el contenido del cuerpo de la tabla
    tablaTarjetas.innerHTML = "";
    //empecemos a crear el contenido
    for (let i = 0; i < tarjetasActivas.length; i++) {
        let fila = tablaTarjetas.insertRow(); //crea el tr
        //agregar las columnas
        //fila.insertCell().innerHTML = reservas_activas[i][0]; //ID
        //fila.insertCell().innerHTML = reservas_activas[i][1]; //Fecha
        //fila.insertCell().innerHTML = reservas_activas[i][2]; //Salon
        //fila.insertCell().innerHTML = reservas_activas[i][3]; //Cant Personas
        fila.insertCell().innerHTML = tarjetasActivas[i].id;
        fila.insertCell().innerHTML = tarjetasActivas[i].tipo;
        fila.insertCell().innerHTML = tarjetasActivas[i].numero;
        fila.insertCell().innerHTML = tarjetasActivas[i].titular;
        fila.insertCell().innerHTML = tarjetasActivas[i].vencimiento;
        fila.insertCell().innerHTML = tarjetasActivas[i].codigo;
    }
}

botonAgregar.addEventListener('click', obtenerDatos);