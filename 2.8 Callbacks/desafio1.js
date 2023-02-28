// 1)
// Utilizando forEach, crea una función que reciba un array de palabras y
//  devuelva otro solamente con las palabras que incluyan la letra “m” (tanto mayúscula como minúscula).

let array_palabras = ["fer", "min", "gon", "zalez"];

function PalabrasConM(array_palabras) {
    let array = [];
    array_palabras.forEach(palabra => {
        if (palabra.toLowerCase().includes("m")) {
            array.push(palabra);
        }
    });
    
    return array;
}


console.log(PalabrasConM(array_palabras));