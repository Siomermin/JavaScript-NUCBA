// Escribí un código en el cual crees un array con gustos de helados y una función que reciba un array de gustos de helados como parámetro 
// que imprima en consola un array con los mismos gustos pero que solo estén las primeras 3 letras de cada gusto, pasadas todas a mayúscula.

let array_gustos_helado = ["dulce de leche", "frutilla", "menta", "chocolate", "banana"];

function MostrarArray(array) {
    let array3Letras = [];

    array.forEach(element => {
       array3Letras.push((element.substring(0, 3)).toUpperCase());
    });

    // for (let i = 0; i < array.length; i++) {
    //     array3Letras.push(array[i].slice(0, 3).toUpperCase());
    // }

    console.log(array3Letras);
}

MostrarArray(array_gustos_helado);
