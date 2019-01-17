window.cipher = {
  // ... 
  suma: (a, b) =>{
    return a+b;

  },

  encode: (offset, usuarioMens) => {
    //tener un mensaje
    let mensaje = usuarioMens;
    //Capturar el offset 
    let espacios = offset;
    //Cambiar a mayusculas
    let mayus= mensaje.toUpperCase();
    console.log(mayus);
     //El lugar de la nueva palabra cifrada
     let final= ''
    //iterar la palabra
    for(let i=0; i<mayus.length; i++){
      //que la agarre 
      let letra= mayus.charAt(i);
      console.log(letra);
      //Identidicar Posición de caracter
      //Encontrar el valor en el código ascii
      let valor= letra.charCodeAt(0);
      console.log(valor);
      //Poner la formula
      let formula= (valor-65+espacios)%26 + 65;
      console.log(formula);
      //Obtener letra del cifrado
      let resultado = String.fromCharCode(formula);
      //Guardarlo en la variable final
      final = final+resultado;

    }

      
    return final 
  },
  decode: () => {}
};
