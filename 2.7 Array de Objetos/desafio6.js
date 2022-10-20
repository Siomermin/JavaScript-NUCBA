// 6)
// Llegamos al último ejercicio, el cual es bastante particular.

// Un integrante del equipo de Nucba es fanático de Cristiano Ronaldo y de escribir las palabras al revés. 
// Como si esto fuera poco, suele poner muchos espacios al principio y al final de cada frase. El otro día escribió la frase que van a ver en este enunciado.

// Para arreglar esto, les pedimos que escriban una función que:

// - Elimine los espacios al principio y al final de la frase.
// - invierta todas las palabras para que el texto pueda leerse correctamente.
// - Reemplace la palabra “Ronaldo” por la palabra “Messi” y viceversa.

let strRoto = "           .levin us ed sojel yum atse isseM y odnum led rodaguj le se odlanoR               ";

function ArreglarString(string) {
    let nuevoStr = "";

    nuevoStr = string.trim();
    nuevoStr = nuevoStr.split(''); // Lo separo en un array de caracteres
    nuevoStr = nuevoStr.reverse(); 
    nuevoStr = nuevoStr.join('');
    nuevoStr = nuevoStr .replace("Messi", "Ronaldo");
    nuevoStr = nuevoStr .replace("Ronaldo", "Messi");

    console.log(nuevoStr);
}

ArreglarString(strRoto);
