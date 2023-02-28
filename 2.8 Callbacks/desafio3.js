// 3)
// Utilizando forEach, crea una función que reciba dos números y un array de números y 
// que devuelva el mismo array pero con los números mayores al primer numero dado multiplicados por el segundo numero dado. 
// En caso de que no sean mayores al número dado, devolver el mismo número en esa posición.

// Ejemplo: Si tenemos un array de números del 1 al 5 , y llamamos a multiplicarMayoresA(3,10,numeros) 
// , el output será : [1,2,3,40,50]

let arrayNumeros = [1, 20, 50, 200, 100, 40];

function MultiplicarMayoresA(num1, num2, arrayNumeros) {
    let nuevoArray = [];

    arrayNumeros.forEach(numero => {
        if (numero > num1) {
            nuevoArray.push(numero * num2);
        }
        else
        {
            nuevoArray.push(numero);
        }
    });

    return nuevoArray;
}

console.log(MultiplicarMayoresA(50, 2, arrayNumeros));