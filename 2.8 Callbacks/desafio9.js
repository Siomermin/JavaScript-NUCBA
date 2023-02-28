// 9)
// Creá una función que ordene el array por año de salida, desde la mas larga hasta la mas corta e imprimí el array por consola .

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

const ordenarPorAño = () => {
    arrayPeliculas.sort(function (peli1, peli2) {
      if (peli1.año > peli2.año) {
        return 1;
      }
      if (peli1.año < peli2.año) {
        return -1;
      }
      // Si el año de la peli1 es igual al de peli 2.
      return 0;
    });

    console.log(arrayPeliculas);
  };

  ordenarPorAño(arrayPeliculas);