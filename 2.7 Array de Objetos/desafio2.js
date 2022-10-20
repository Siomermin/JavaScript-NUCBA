// 2)
// Ahora hagamos el camino inverso, crea una función que elimine el primer elemento del array y lo coloque al final. Imprimí el array en consola.

let array_gustos_helado = ["dulce de leche", "frutilla", "menta", "chocolate", "banana"];

function InvertirArray() {
    let primerElemento = array_gustos_helado.shift();
    array_gustos_helado.push(primerElemento);

    console.log(array_gustos_helado);
}

InvertirArray();