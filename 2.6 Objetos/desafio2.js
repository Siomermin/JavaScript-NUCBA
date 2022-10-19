// 2)
// Ahora vamos a meter funciones. Crea otro objeto literal “zapatilla2” con las mismas propiedades que la anterior. 
// Luego , escribí una función que reciba dos zapatillas como parámetro que compare el talle de ambas y que según el caso correspondiente imprima en consola:

// - Si el talle de la primera es mayor que el de la segunda, que imprima : “El talle de la zapatilla {marca1} es mayor que el de la zapatilla {marca2}".

// - Si el talle de la primera es menor que el de la segunda, que imprima : “El talle de la zapatilla {marca1} es menor que el de la zapatilla {marca2}”.

// - Si los talles coinciden, que imprima : “Los talles de ambas zapatillas son iguales”

const zapatilla1 = {
    talle: 45,
    color: "Negro",
    marca: "Vans"
}

const zapatilla2 = {
    talle: 45,
    color: "Negro",
    marca: "Nike"
}

function CompararTalleZapatillas(zapatilla1, zapatilla2) {
    if (zapatilla1.talle > zapatilla2.talle) {
        console.log(`El talle de la zapatilla ${zapatilla1.marca} es mayor que el de la zapatilla ${zapatilla2.marca}`);

    } else if (zapatilla1.talle < zapatilla2.talle) {
        console.log(`El talle de la zapatilla ${zapatilla1.marca} es menor que el de la zapatilla ${zapatilla2.marca}`);
    } else {
        console.log("Los talles de ambas zapatillas son iguales");
    }
}

// const CompararTalleZapatillas = (zapatilla1, zapatilla2) => {
//     if (zapatilla1.talle > zapatilla2.talle) {
//         console.log(`El talle de la zapatilla ${zapatilla1.marca} es mayor que el de la zapatilla ${zapatilla2.marca}`);

//     } else if (zapatilla1.talle < zapatilla2.talle) {
//         console.log(`El talle de la zapatilla ${zapatilla1.marca} es menor que el de la zapatilla ${zapatilla2.marca}`);
//     } else {
//         console.log("Los talles de ambas zapatillas son iguales");
//     }
// }

CompararTalleZapatillas(zapatilla1, zapatilla2);