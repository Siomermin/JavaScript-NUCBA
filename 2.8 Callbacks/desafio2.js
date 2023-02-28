// 2)
// Utilizando forEach, crea una función que reciba dos 
// números y un array de números y que devuelva otro array 
// con aquellos números que estén en el array y sean mayores 
// al primer numero dado y menores al segundo ( sin incluirlos).


let numero1 = 10;

let numero2 = 50;

let arrayNumeros = [1, 20, 50, 200, 100, 40];

function FuncionNumeros(num1, num2, arrayNumeros) {
    let array = [];

    arrayNumeros.forEach(numero => {
        if (numero > num1 && numero < num2) {
            array.push(numero);
        }
    });

    return array;
}

console.log(FuncionNumeros(numero1, numero2, arrayNumeros));

