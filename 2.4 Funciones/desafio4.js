// Escribí una función que pueda recibir un número como parámetro y que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.
// Nota: El mensaje en consola debe ser "user-friendly" (Ej. : El “(número) multiplicado por (número actual de la tabla) es igual a (resultado) “)

function MostrarTablaMultiplicacion(numero) {
    for(let i = 1; i <= 10; i++) {
        console.log(`El numero ${numero} multiplicado por ${i} es igual a ${numero * i}`);
    }
}

MostrarTablaMultiplicacion(2);