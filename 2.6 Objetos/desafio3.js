// 3)
// Ahora pasemos a crear nuestro objetos con clases constructoras. Creá una clase “Zapatilla” que tenga las mismas propiedades que los objetos creados anteriormente.
// Luego, creá 2 zapatillas utilizando esa clase e imprimí ambas por consola.

class Zapatilla {
    
    constructor(talle, color, marca) {
        this.talle = talle;
        this.color = color;
        this.marca = marca;
    }
}

zapatilla1 = new Zapatilla(42, "Blanco", "Adidas");
zapatilla2 = new Zapatilla(42, "Negro", "Jaguar");

console.log(zapatilla1);
console.log(zapatilla2);