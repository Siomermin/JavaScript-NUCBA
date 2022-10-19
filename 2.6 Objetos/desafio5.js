// 5)
// A la clase Zapatilla, agregale una propiedad “precio”. Luego creá una función que reciba dos zapatillas , 
// compare el precio de ambas y que devuelva por consola un mensaje que diga:

// > “La zapatilla {marca} es la mas cara del mercado, con un valor de ${precio}.”


// Si ambas tienen el mismo precio, imprimí un mensaje que diga que las zapatillas de ambas marcas son las mas caras del mercado, con un valor de ${precio}.

class Zapatilla {
    
    constructor(talle, color, marca, precio) {
        this.talle = talle;
        this.color = color;
        this.marca = marca;
        this.precio = precio;
    }

    compararPrecio(zapatilla1 , zapatilla2) {

        if (zapatilla1.precio > zapatilla2.precio) {
            console.log(`La zapatilla ${zapatilla1.marca} es la mas cara del mercado, con un valor de ${zapatilla1.precio}.`);

        } else if (zapatilla1.precio < zapatilla2.precio) {
            console.log(`La zapatilla ${zapatilla2.marca} es la mas cara del mercado, con un valor de ${zapatilla2.precio}.`);

        } else {
            console.log(`Las zapatillas de ambas marcas son las mas caras del mercado, con un valor de ${zapatilla1.precio}`)
        }
    }

    getInfo() {
        console.log(`Soy una zapatilla ${this.marca} de talle ${this.talle} y color ${this.color}`);
    }
}

zapatilla1 = new Zapatilla(42, "Blanco", "Adidas", 120);
zapatilla2 = new Zapatilla(42, "Negro", "Jaguar", 140);

zapatilla1.compararPrecio(zapatilla1, zapatilla2);