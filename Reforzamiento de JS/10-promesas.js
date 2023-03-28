
import {heroes} from './json/heroes.js'

console.log('Inicio');

//ASI se declara una promesa, esta tiene dos funciones 
/*La cuales es resolve(Si se ejecuto bien), reject(el error) */
new Promise((resolve, reject) => {
    console.log('cuerpo de la promesa');
    resolve('Se resolvio')
    //reject('ERROR')
})
    //Then obtiene el valor de la funcion resolve
    .then(msg => console.log(msg))
    //Catch obtiene el erro / reject
    .catch(err => console.log(err))

console.log('Final');

///////////////////////////////////////////
//Promesa mediante un objeto de otro lado, ojo este se puso aqui porque no me jalo el export

//Funcion para buscar un heroe mediante su id que se manda desde la promesa
const getHeroById = (id) => {
    return  heroes.find((item) => {
        return item.id == id
    })
}

//Funcion que retorna la promesa
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        //Funcion de tiempo que se ejecuta en 1 seg
        setTimeout(() => {
            //Variable que se iguala al valor de lafuncion que al mismo tiempo se le pasa el paramtro id    
            const hero = getHeroById(id)
            //Condiccion para determinar si se manda en resolve o el reject
            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no existe')
            }
        }, 1000);
    });
}
//Se manda a llamar la funcion con la promesa y se le manda un num que se toma como 8id
getHeroByIdAsync(2)
    //Then es para cuando se ejecute correcto y imprima el dato
    .then(h => console.log(h))
    //Catch es para cuando se ejecute incorrecto y imprima el error
    .catch(e => console.log(e))
