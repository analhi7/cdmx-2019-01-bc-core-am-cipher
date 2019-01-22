window.cipher = {
    // ... 


    encode: (offset, usuarioMens) => {

      let espacios = parseInt(offset);

      let final = '';

      for (let i = 0; i < usuarioMens.length; i++) {

        let valor = usuarioMens.charCodeAt(i);


        if (valor >= 65 && valor <= 90) {
          let formula = (valor - 65 + espacios) % 26 + 65;
          let resultado = String.fromCharCode(formula);
          final = final + resultado;
        } else if (valor >= 97 && valor <= 122) {
          let minusculas = (valor - 97 + espacios) % 26 + 97;
          let resultado = String.fromCharCode(minusculas);
          final = final + resultado;

        } else {

          let resultado = String.fromCharCode(valor);
          final = final + resultado;
        }
      }

      return final;

    },






    decode: (offset, usuarioMens) => {


      let espacios = parseInt(offset);

      //El lugar de la nueva palabra cifrada
      let final = ''
      //iterar la palabra
      for (let i = 0; i < usuarioMens.length; i++) {
        //Encontrar el valor en el código ascii
        let valor = usuarioMens.charCodeAt(i);

        if (valor >= 65 && valor <= 90) {
          let formula = (valor + 65 - espacios) % 26 + 65;
          let resultado = String.fromCharCode(formula);
          final = final + resultado;

        } else if (valor >= 97 && valor <= 122) {
          let minusculas = (valor - 122 - espacios) % 26 + 122;
          let resultado = String.fromCharCode(minusculas);
          final = final + resultado;
        } else {
          let resultado = String.fromCharCode(valor);
          final = final + resultado;


        }

    }
        return final;
  }
      
}
  