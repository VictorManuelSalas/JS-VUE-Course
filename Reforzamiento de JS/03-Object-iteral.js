/* Asi se declara un objeto*/

const persona = {
    nombre: 'Tony',
    apellido: 'Sanchez',
    edad: 12,
    direccion:{
        ciudad: 'Torreon',
        zip: 27000
    }
}

//Para grabar los datos en otro objecto y poder editarlos sin complicaciones con el original
/*Se usan los ... para aser referencia a todos los elementos y creacion de replica */

const persona2 = { ...persona }; //<-Iterador Spread
//Para acceder a elementos de un objeto se usa mendiante el object un punto y el identificador
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
