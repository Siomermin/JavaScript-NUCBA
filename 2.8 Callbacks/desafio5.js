// 5)
// Crea una función que reciba un array de palabras que devuelva la primer palabra del array 
// ( la primera que se encuentre) que tenga mas de 4 letras. 
// En caso de que no haya, deberá devolver un string que diga : “No hay palabras con mas de 4 letras”

let arrayPalabras = ["pepe", "pep", "pepon"];

const BuscarPalabra4Letras = (arrayPalabras) => {
    arrayPalabras.some((palabra => palabra.length > 4)) ?
    arrayPalabras.find( e => e.length > 4) :
    "No hay palabras con mas de 4 letras";
}

console.log(BuscarPalabra4Letras(arrayPalabras));