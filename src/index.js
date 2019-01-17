
//Variables botones Cifrador
const codificar = document.getElementById('codificar')
const decodificar = document.getElementById('decodificar')
//Variable del texto escrito por el usuario
let mensajeSin = document.getElementById('mensajeOculto')
//Variable del offset que elige el usuario
const num = document.getElementById('NumeroEspacios')
//variable caja de texto donde se imprime el mensaje
let mensajes = document.getElementById('mensajeDeco')

//Variable boton resetar
const refrescar= document.getElementById('refrescar')

//Variables Botones paginacion
const instruB = document.getElementById('instruB')
const comenzar = document.getElementById('comenzar')
const comenzarD = document.getElementById('comenzarD')

//Boton para mostrar instrucciones.
instruB.onclick = function (){
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('instrucciones').style.display = 'block'
    }
    //Boton para mostrar codificador
    comenzar.onclick = function (){
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('codificador').style.display = 'block'
    }
    //Boton mostrar codificador desde instrucciones
    comenzarD.onclick= function (){
    document.getElementById('instrucciones').style.display= 'none'
    document.getElementById('codificador').style.display= 'block'
    }
    
//BOTONES CODIFICADOR
//Boton para accionar codificador

codificar.addEventListener('click',()=> {
    //tomar el texto de text area
    let UsuarioMens = mensajeSin.value;
    let offset = num.value;
    let resultCipher = window.cipher.encode(offset,UsuarioMens);
    mensajes.value= resultCipher
    //tomar offset 
    //utilizar valores como parametros de mi funcion encode
    //poner el texto en mi segunda text area
})

//BOTONES DECODIFICADOR
//Boton para accionar codificador
decodificar.addEventListener('click',()=> {
    //tomar el texto de text area
    let UsuarioMens = mensajeSin.value;
    let offset = num.value;
    mensajes.value=window.cipher.decode(offset,UsuarioMens);
})


//Boton refrescar
refrescar.addEventListener('click', ()=> {
    mensajes.value= '';
    num.value= '';
    mensajeSin.value= '';
})