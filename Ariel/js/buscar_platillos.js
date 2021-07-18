function buscar_platillos() {
    let input = document.getElementById('Buscar...').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('platillos');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}