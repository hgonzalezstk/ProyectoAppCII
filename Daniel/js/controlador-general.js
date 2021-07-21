const cambiar_estilo_navegacion = () => {
    let navegacion = document.getElementById("header-principal");

    if (navegacion.className == "header-principal") {
        navegacion.className = "header-principal responsive";
    } else {
        navegacion.className = "header-principal";
    }
}