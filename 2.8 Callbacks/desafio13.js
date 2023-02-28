// 13)
// Creá una función que reciba un array de películas y 
// retorne la sumatoria de los minutos de duración de todas las películas del mismo. Imprimí luego el siguiente mensaje en consola:

// “La cantidad total de minutos de las películas es de {total} minutos”

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

const totalDeMinutos = (peliculas) =>
  peliculas.reduce((acc, curr) => acc + curr.duracion, 0);


// const SumarDuracionPeliculas = (arrayPeliculas) => {
//     let acumulador = 0;
//     arrayPeliculas.forEach(pelicula => {
//         acumulador += pelicula.duracion;
//     });

//     console.log(`La cantidad total de minutos de las películas es de ${acumulador} minutos`);
// }

totalDeMinutos(arrayPeliculas);