// 7)
// Usando el mismo array de números y map , crea una función que reciba un array de números, un número
//  y una función que realice una operación matemática con el número dado y la función pasada como parámetro para cada número del array dado ,
//   y devuelva el nuevo array con los resultados 
// ( podes utilizar las funciones de suma, resta, multiplicación y división de anteriores prácticas.

let arrayNumeros = [1, 20, 50, 200, 100, 40];

function Sumar(num1, num2) {
    console.log(num1 + num2);
}

const Operar = (arrayNumeros, numero, operacionMatematica) => {
    return arrayNumeros.map(numeros => operacionMatematica(numeros, numero));
}

console.log(Operar(arrayNumeros, 2, Sumar));