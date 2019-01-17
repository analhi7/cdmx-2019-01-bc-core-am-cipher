//Variables Botones
const instruB= document.getElementById('instruB')
const comenzar= document.getElementById('comenzar')
const comenzarD= document.getElementById('comenzarD')
//Botones Cifrador
const codificar= document.getElementById('codificar')
const decodificar= document.getElementById('decodificar')

//Variables texto
const mensajeSin= document.getElementById('mensajeOculto')
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

codificar.addEventListener('click',()=> {
    //
    //
    //
    let msj= mensajeSin.value
    window.cipher.encode(msj,mensajeSin)
})
