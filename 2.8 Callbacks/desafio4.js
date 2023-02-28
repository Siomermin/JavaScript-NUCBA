// 4)
// Crea una función que reciba un array de números y un número que EN CASO DE QUE EXISTA al menos un número mayor al dado, 
// retorne el primero que cumpla con esa 
// condición. En caso contrario, que retorne “No hay números mayores al número dado”

let arrayNumeros = [1, 20, 50, 200, 100, 40];

function RetornarMayoresA(arrayNumeros, numero) {

    let numMayor = arrayNumeros.find(num => num > numero);
   
    if (numMayor) {
        return numMayor;
    }
    else {
        return  "No hay números mayores al número dado";
    }
}

console.log(RetornarMayoresA(arrayNumeros, 320));