const botonUno = document.getElementById('instrucciones');
botonUno.addEventListener('click', botonA);
function botonA(){
    instrucciones.classList.add("hide");
    inicio.classList.remove("hide");

}