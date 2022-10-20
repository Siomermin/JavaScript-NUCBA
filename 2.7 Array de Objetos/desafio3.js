// 3)
// Creá una función que invierta el orden de los elementos del array e imprima en consola un “string” a partir de ese array invertido, separando las palabras con “-”.
let array_gustos_helado = ["dulce de leche", "frutilla", "menta", "chocolate", "banana"];

function InvertirHelados() {
    array_gustos_helado.reverse();
    console.log(array_gustos_helado.join('-'));
}

InvertirHelados();