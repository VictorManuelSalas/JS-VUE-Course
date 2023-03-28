
//Esta es la manera habitual de recorrer un objeto
const characters = ['Goku', 'Vegeta', 'Trunks']

const guku = characters[0]
const vegeta = characters[1]

console.log(guku,vegeta);

//Para destructurar un arreglo para evitar lo de arriba es mediante:

const characters2 = ['Goku', 'Vegeta', 'Trunks']
//Por cada elemento que no se quiere obtener solo se deja en vacio y a los que si solo se les da un identificador
const [ , , t, goten='no existe'] = characters2
console.log(t);


const returnArray = ([letras, numeros]) => {
    return [letras, numeros]
}

const [letras, numeros] = returnArray(['HOLAAAA', 121212])
console.log(letras, numeros);