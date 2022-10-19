
// - Escribir las funciones “sumar” , “restar” , “multiplicar” “dividir” que puedan recibir dos parámetros e imprima en consola el resultado de la operación matemática correspondiente

// - Escribir una función que reciba dos números y una función como parámetros y que muestre en consola el resultado correspondiente a la operación matemática pasada como parámetro.

function Sumar(num1, num2) {
    console.log(num1 + num2);
}

function Restar(num1, num2) {
    console.log(num1 - num2);
}

function Multiplicar(num1, num2) {
    console.log(num1 * num2);
}

function Dividir(num1, num2) {
    console.log(num1 / num2);
}

function OperacionMatematica(num1, num2, operacion) {
    operacion(num1, num2);
}

// const Sumar = (num1, num2) => {
//     console.log(num1 + num2);
// };

// const Restar = (num1, num2) => {
//     console.log(num1 - num2);
// };

// const Dividir = (num1, num2) => {
//     console.log(num1 / num2);
// };

// const Multiplicar = (num1, num2) => {
//     console.log(num1 * num2);
// }

// const OperacionMatematica = (num1, num2, operacion) => {
//     operacion(num1, num2);
// };


OperacionMatematica(10, 2, Dividir);