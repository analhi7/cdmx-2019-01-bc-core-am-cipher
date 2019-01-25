
# Un buen detective camina de puntitas 

Aplicación web codificador/decodificador de Cifrado César.
El cifrado César es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad. 
Esta web app es parte de un libro digital interactivo para niños a partir de los 7 años, llamado "Un buen detective camina de puntitas", en el que el lector encontrará mensajes en código que tendrá que ingresar en el sitio web, para trasformarlos y poder continuar con su lectura. 


### Instalación

1. Para comenzar la instalción necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),

2. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/analhi7/cdmx-2019-01-bc-core-am-cipher).
3. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).


## Test
1. Instala [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
2. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. 
3. Ahora podrás ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.

### Funcionamiento de Test

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto **NO** está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.


# Descripción del producto
 En la busqueda por hacer libros que puedan ayudar a pensar, y a que los más pequeños se interesen en la lectura, editorial "Milrazones" lanzó el libro "Un buen detective camina de puntitas". Libro digital interactivo para niños a partir de los siete años, que con el uso de una web app les permite codificar y decodificar mensajes a partir de un código númerico que les ayudará a tomar desiciones a lo largo de su lectura.

# Definición de objetivos

Fomentar la lectura a través de la narrativa hipertextual y el uso aplicaciones web. 

Brindar al usuario por medio de una web app, la posibilidad de cifrar o descifrar los mensajes necesarios para 



# Usuario de producto
Niños a partir de los siete años que tengan interes en historias de detectives.

# Diseño 
La aplicación web tiene un diseño sencillo que el usuario pueda identificar de inmediato y ligarlo con el libro. El fondo simula una hoja de papel viejo. Se utiliza una paleta de color que contrasta con el papel de fondo, utilizando colores brillantes. Se utilizan tipografías san serif y handwriting para simular archivos secretos que llamen la atención de los lectores. 

# Distribución del diseño

El sitio web se divide en tres secciones. La sección de inicio, en la que el usuario puede elegir si leer las instrucciones o comenzar a codificar su código.
La segunda sección donde se encuentran desplegadas las instrucciones de uso, y por último la sección del cifrador que cuenta con dos cajas de texto, la del lado izquierdo para cifrar y la del derecho para descifrar el mensaje. En la parte superior de la caja de texto "cifrar" se puede seleccionar el código númerico con el que se desea codificar o decodificar el mensaje. En la parte inferior de ambas cajas se encuentran los botones cifrar, reiniciar y descifrar. 