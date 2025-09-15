/* 
Funciones a elaborar:

* printByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* printByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/

const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "        ⠙⠻⠁"
]

function mostrarCaracter(array, delayMs = 5) {
  let k = 0; 
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const ch = array[i][j]; 
      const t = k * delayMs;
      setTimeout(() => process.stdout.write(ch), t);
      k++;
    }
    setTimeout(() => process.stdout.write("\n"), k * delayMs);
    k++;
  }
}

//mostrarCaracter(asciiHeart, 10);

function mostrarLineas(lines, delayMs = 2000) {
  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      console.log(lines[i]);
    }, i * delayMs);
  }
}

//mostrarLineas(asciiHeart,1000)