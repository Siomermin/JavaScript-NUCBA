// 4)
// En el ejercicio anterior imprimimos las zapatillas por consola, pero no esta bueno mostrar el objeto de una manera que no sea "user-friendly". 
// Creá un método “getInfo” en la clase zapatilla que retorne :

// - “Soy una zapatilla “marca” de color “color” y de talle “talle”.“


// Finalmente, imprimí por consola la información de ambas zapatillas que creaste.

class Zapatilla {
    
    constructor(talle, color, marca) {
        this.talle = talle;
        this.color = color;
        this.marca = marca;
    }

    getInfo() {
        console.log(`Soy una zapatilla ${this.marca} de talle ${this.talle} y color ${this.color}`);
    }
}

zapatilla1 = new Zapatilla(42, "Blanco", "Adidas");
zapatilla2 = new Zapatilla(42, "Negro", "Jaguar");

zapatilla1.getInfo();
zapatilla2.getInfo();
