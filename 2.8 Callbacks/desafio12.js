// 12)
// Crea una función que reciba un array de películas como parámetro y 
// devuelva un nuevo array con las películas que duren menos de 150 minutos y sean de un año menor o igual que el año 2016 .

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


const FiltrarPeliculas = (arrayPeliculas) => {
    return arrayPeliculas.map(pelicula => pelicula.duracion < 150 && pelicula.año <= 2016);
  }

console.log(FiltrarPeliculas(arrayPeliculas));