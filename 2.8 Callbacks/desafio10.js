// 10)
// Crea una función que ordene el array por duración, desde la que mas haya durado hasta la que menos. imprimí por consola el array.

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

const ordenarDuracion = () => {
    arrayPeliculas.sort(function (peli1, peli2) {
      if (peli1.duracion < peli2.duracion) {
        return 1;
      }
      if (peli1.duracion > peli2.duracion) {
        return -1;
      }
      // Si la duracion de la peli1 es igual al de peli 2.
      return 0;
    });

    console.log(arrayPeliculas);
  };

  ordenarDuracion(arrayPeliculas);