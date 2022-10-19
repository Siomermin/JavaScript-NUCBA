// Escribí una función que reciba dos números por parámetro y que imprima por consola todo el intervalo entre ambos números, incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse en consola los números “1” , “2” y “3”. Sin son iguales, que se imprima “Ambos números son iguales”.

function IntervaloEntreNumeros(num1, num2) {
    if (num1 > num2) {
        for(; num2 <= num1; num2++) {
            console.log(num2);
        }

    } else if (num1 < num2) {
        for(; num1 <= num2; num1++) {
            console.log(num1);
        }

    } else {
        console.log(`Los numeros son iguales: ${num1} `);
    }
}

// const IntervaloEntreNumeros = (num1, num2) => {
//     if (num1 > num2) {
//         for(; num2 <= num1; num2++) {
//             console.log(num2);
//         }

//     } else if (num1 < num2) {
//         for(; num1 <= num2; num1++) {
//             console.log(num1);
//         }

//     } else {
//         console.log(`Los numeros son iguales: ${num1} `);
//     }
// };



IntervaloEntreNumeros(20, 30);