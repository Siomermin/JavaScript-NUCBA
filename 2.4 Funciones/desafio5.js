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


IntervaloEntreNumeros(20, 30);