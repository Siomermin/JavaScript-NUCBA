// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). 
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , 
// imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

let pizzas = [ 
    {
        id : 1,
        nombre : "Anana",
        ingredientes :  ["masa", "peperoni", "aceituna"],
        precio : 1500
    },
    {
        id : 2,
        nombre : "Banana",
        ingredientes :  ["masa", "banana", "aceituna"],
        precio : 1200
    },
    {
        id : 3,
        nombre : "Muzza",
        ingredientes :  ["masa", "muzzarella", "aceituna"],
        precio : 1500
    },
    {
        id : 4,
        nombre : "Sandia",
        ingredientes :  ["Sandia", "agua", "aceituna"],
        precio : 500
    },
    {
        id : 5,
        nombre : "Cebolla",
        ingredientes :  ["masa", "Cebolla", "tomate"],
        precio : 1500
    },
    {
        id : 6,
        nombre : "Tomate",
        ingredientes :  ["muzzarella", "tomate", "aceituna"],
        precio : 1500
    }
];

const MostrarPizza = (pizza) => {
    console.log(`ID: ${[pizza.id]} - Nombre: ${pizza.nombre} - Precio: ${pizza.precio} `);
    console.log("Ingredientes:")
    pizza.ingredientes.forEach(ingrediente => {
        console.log(ingrediente)})
    console.log("\n");
}

// a) Las pizzas que tengan un id impar

console.log("Las pizzas que tengan un id impar");

const MostrarImpares = (pizzas) => {
    pizzas.forEach(pizza => {
        if (pizza.id % 2 != 0) {
            MostrarPizza(pizza);
        }
    });
}

MostrarImpares(pizzas);

// b) ¿Hay alguna pizza que valga menos de $600?

console.log("¿Hay alguna pizza que valga menos de $600?");

const BuscarPizzasMenos600Pesos = (pizzas) => {
    pizzas.forEach(pizza => {
        if (pizza.precio < 600) {
            MostrarPizza(pizza);
        }
    })
}

const MostrarPizzasMenos600Pesos = (pizzas) => {
    pizzas.some(pizza => {pizza.precio < 600}) ? BuscarPizzasMenos600Pesos(pizzas) : console.log("No hay pizzas que valgan menos de $600");
}

MostrarPizzasMenos600Pesos(pizzas);


