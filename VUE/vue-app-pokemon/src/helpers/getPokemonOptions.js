import pokemonApi from "@/api/pokemonApi"

const getPokemosn = () => {
    //El array.from es para dar a entender a javascript que creé un arreglo basado en un arreglo que esta entre parentesis 
    //Lo que esta en parentesis crea un arreglo con 650 posiciones vacias
    const pokemonArray = Array.from(Array(650))

    //Se crea un arrglo mediante referencia al arreglo primcipal modificando su index para que empiece desde 1 y no desde cero
    return pokemonArray.map((_, index) => index + 1)
}
const getPokemonsOptions = async () => {

    //Se crea un const que se iguala al arreglo que retonra la funcion getPokemosn y los ordena metiendo numeros random menos 0.5 para que lanze numeros positivos
    const mixedPokemon = getPokemosn().sort(() => Math.random() - 0.5)

    //Se le manda como parametro a la funcion de laa constante el arreglo de mixed recorriendo solo de la pocicion 0 asta la 4 con splice
    const pokemons = await getPokemonNames(mixedPokemon.splice(0, 4))
    return pokemons
}

//Se crea una constante igualandola a una arrow function que recibe parametros 
const getPokemonNames = async ([a, b, c, d]) => {
    
    console.log(a, b, c, d)

    //Se crea un arreglo con las 4 peticiones
    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    // [] = destructuracion
    //Se crea una constante que se le ejecutaria las promesas en conjunto con las 4 por eso se usa el .all y se le manda el arreglo donde se tienen dichas sitaxis para las promesas
    const [p1, p2, p3, p4] = await Promise.all(arrPromises)

//Como la constante anterior se destructura para tener acceso mas ordenado a la informacion 
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]
}
export default getPokemonsOptions