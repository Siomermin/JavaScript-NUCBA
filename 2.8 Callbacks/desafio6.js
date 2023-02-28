// 6)
// Utilizando map, crea una función que reciba un array de números y 
// devuelva el mismo array pero con todos los números duplicados.

let arrayNumeros = [1, 20, 50, 200, 100, 40];

const DuplicarNumeros = (arrayNumeros) => {
    return arrayNumeros.map(numeros => numeros * 2);
}

console.log(DuplicarNumeros(arrayNumeros));