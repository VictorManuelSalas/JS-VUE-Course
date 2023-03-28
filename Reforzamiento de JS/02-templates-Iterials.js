
//let se usara solo cuando sabemos que una variable se modificara en un futuro

//Template Iterials
//Lo que se tiene dentro de esto es un codigo o elemento de JS
//Son las comillas inversas las cuales permite agregar texto y en el mandar a llamar variables mediante el ${}
const nombre = 'Pedro'
const apellido = 'Sanches'
const nombreCompleto = `${nombre} ${apellido}`

console.log(`Suma: ${1 + 2}`)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

//En este tambien se pueden llamar funciones y mandarles parametros
console.log(`Este es un texto donde se le pasa el parametro a una funcion: ${getSaludo(nombre)}` );