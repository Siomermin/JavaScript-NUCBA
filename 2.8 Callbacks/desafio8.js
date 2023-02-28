// 8)
// A partir de este ejercicio vamos a trabajar con objetos. Les damos la clase 
// y también 5 películas ya creadas (vamos a usar este array para los siguientes ejercicios también).

// 📌 Clase y películas

// Como primera medida, creá un array de películas vacío 
// y mediante métodos de array agrega todas las películas al array vacío e imprimí por consola el array.

class Pelicula {
    constructor(titulo, duracion, año) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.año = año;
    }
  }
  
  const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
  const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
  const starWars = new Pelicula("Star Wars: El despertar de la fuerza", 135, 2015);
  const batman = new Pelicula("Batman vs Superman", 151, 2016);
  const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

let arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);

