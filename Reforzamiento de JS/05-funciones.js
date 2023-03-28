//Se definen asi ->
function saludar() {
    //Estas siempre retornan algo
    return 'Hola mundo'
}

//ASI se mandan a llamar mediante ()
console.log(saludar());

//Para pasar parametros en funciones se agregan entre las ()
function saludar2(name) {
    return `Normal Function, ${name}`
}

const nombre = 'Tony'
//aSI se le envia una variable a la funcion
console.log(saludar2(nombre));


//Funcion declarativa(son las que se declaran kmediante una variable)

const nuevaFuncion = function (apellido) {
    return `Declarative Function, ${apellido}`
}
const apellido = 'Tony'
console.log(saludar2(apellido));


//Funciones de flecha
//Estas se declaran como una funcion declarativa excepto que se retira la function y se agregan =>
const Flecha = (name, apellido) => {
    return `Array function, ${name} ${apellido}`
}
console.log(Flecha(nombre, apellido));

//Otra forma de usar las array function y solo se requiere qque se ejecute una linea de codigo
//y QUITAR las llaves y poner el codigo en la misma linea como se muestra en siguiente 
const Flecha2 = (name, apellido) => `Array Function, one line ${name} ${apellido}`

console.log(Flecha2(nombre, apellido));

//Objetos con Funciones
//Para usar objetos dentro de una funcion se debe de cerrar con () para que js sepa qeu es un objeto
const getUser = () => ({
    uid: '12231',
    username: 'Toy001'
})
console.log(getUser());

//Usar un objeto con varios elementos 
const getHeroes = [
    {
        id: 1,
        name: 'Batman'
    }, 
    {
        id: 2,
        name: 'Superman'
    }
]
console.log(getHeroes);

//SOME() Entra en cada elemento para ver si exitse o no un valor
//Este manda un booleano

const existe = getHeroes.some((item)=>{
    return item.id == 1;
});
console.log(existe);

//El finde() sirve igual pero este no arroja un boleano sino trae todo el dato que se relacione
const existe2 = getHeroes.find((item)=>{
    return item.id == 1;
});
console.log(`${existe2} y nos metemos al nombre -> ${existe2.name}`);