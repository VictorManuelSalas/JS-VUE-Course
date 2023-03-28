const persona = {
    name: 'Tony',
    age: 23,
    codeName: 'Ironman'
}

//Asi se destructuralisa un objeto, esto aria como que crear variables con valores que se obtinen del objto persona
const { name, codeName, age, power = 'No tiene' } = persona
console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

//Crear un objeto mediante valores de otro tipo tamplate
const createHero = (data) => {
    const { name, codeName, age, power = 'No tiene' } = data
    return {
        //Se puede generar identificadores asi con : pero con ES6 se 
        //Puede pasar directo. coomo en age y power.
        id: 122312,
        name: name,
        age,
        codeName: codeName,
        power
    }
}
console.log(createHero(persona));

//Lo mismo que la anterior pero en una sola linea de codigo
const createHero2 = ({ name, codeName, age, power = 'No tiene' }) => ({ id: 122312, name, age, codeName, power })

console.log(createHero2(persona));