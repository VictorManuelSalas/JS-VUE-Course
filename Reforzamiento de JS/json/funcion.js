
//Se importa la funcion donde se encuentra el codigo para obtener el heroe mediante un id
import { getHeroById } from "./json/funcion.js";
//Se importa el objeto heroes donde se buscara dicho heroe
import { heroes } from "./json/heroes.js";

//Como es una funcion ya importada aqui, solo es necesario mandar la a llamar y pasarle los parametros necesarios 
//lo cual el numero es el id que buscara en el objeto, y el heroes es el objeto completo el cual se importo de otro doc
console.log(getHeroById(1, heroes))
//Obtenemos la funcion

