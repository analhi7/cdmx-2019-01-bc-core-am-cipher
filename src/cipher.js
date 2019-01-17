window.cipher = {
    // ... 


    encode: (offset, usuarioMens) => {

      //tener un mensaje
      let mensaje = usuarioMens;

      //Capturar el offset 
      let espacios = parseInt(offset);
      //Cambiar a mayusculas
      let mayus = mensaje.toUpperCase();
     
      //El lugar de la nueva palabra cifrada
      let final = ''
      //iterar la palabra
      for (let i = 0; i < mayus.length; i++) {
        //que la agarre 
        let letra = mayus.charAt(i);
        
        //Identidicar Posición de caracter
        //Encontrar el valor en el código ascii
        let valor = letra.charCodeAt(0);
        
        //Poner la formula
        let formula = (valor - 65 + espacios) % 26 + 65;
        
        //Obtener letra del cifrado
        let resultado = String.fromCharCode(formula);
        //Guardarlo en la variable final
        final = final + resultado;

      }

      return final
    },



 


  decode: (offset, usuarioMens) => {
    //tener un mensaje
    let mensaje = usuarioMens;
    //Capturar el offset 
    let espacios = parseInt(offset);
    //Cambiar a mayusculas
    let mayus = mensaje.toUpperCase();
    
    //El lugar de la nueva palabra cifrada
    let final = ''
    //iterar la palabra
    for (let i = 0; i < mayus.length; i++) {
      //que la agarre 
      let letra = mayus.charAt(i);
      
      //Identidicar Posición de caracter
      //Encontrar el valor en el código ascii
      let valor = letra.charCodeAt(0);
     
      //Poner la formula
      let formula = (valor + 65 - espacios) % 26 + 65;
      
      //Obtener letra del cifrado
      let resultado = String.fromCharCode(formula);
      //Guardarlo en la variable final
      final = final + resultado;

    }


    return final
  },
};