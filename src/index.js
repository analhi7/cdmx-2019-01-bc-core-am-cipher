
//Boton para mostrar instrucciones.

instruB.onclick= function (){
    document.getElementById('inicio').style.display= 'none'
    document.getElementById('instrucciones').style.display= 'block'
}

//Boton para mostrar codificador
comenzar.onclick= function (){
    document.getElementById('inicio').style.display= 'none'

    document.getElementById('codificador').style.display= 'block'
}

//Boton mostrar codificador desde instrucciones
comenzarD.onclick= function (){
    document.getElementById('instrucciones').style.display= 'none'

    document.getElementById('codificador').style.display= 'block'
}