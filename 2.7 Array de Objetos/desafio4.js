// 4)
// Crea otro array de gustos de helado con al menos 3 gustos de helado. 
// Luego, crea una función que una ambos arrays y retorne un único array que solo deje los dos últimos elementos del primer array y los primeros del segundo. 
// Finalmente, imprimí ese nuevo array por pantalla.

let array_gustos_helado = ["dulce de leche", "frutilla", "menta", "chocolate", "banana"];

let array_gustos_helado2 = ["pera", "naranja", "sabayon"];

function FusionarArrays() {

    let arrayPrimero = array_gustos_helado.slice(array_gustos_helado.length - 2);

    let arraySegundo = array_gustos_helado2.slice(0, 2);

    console.log(arrayPrimero.concat(arraySegundo));
}

FusionarArrays();