// 1)
// Creá un array con al menos 5 gustos de helados y luego crea una función que:

// - Coloque el último sabor de helado del array al principio del mismo
// - Agregue un sabor (recibido como parámetro) al final del array
// - Imprima el array en consola

let array_gustos_helado = ["dulce de leche", "frutilla", "menta", "chocolate", "banana"];

function ModificarSabores(sabor) {
    let ultimoSabor = array_gustos_helado.pop();

    array_gustos_helado.unshift(ultimoSabor);

    array_gustos_helado.push(sabor);

    console.log(array_gustos_helado);
}

ModificarSabores("Limon");

