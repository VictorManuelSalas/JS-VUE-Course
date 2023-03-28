//Asi se declara un arreglo
//Los arreglos empiezand desde 0
const arreglo = [1,2,3,4,5]

//Se puede acceder un elemento mediante su id o posicion
console.log(arreglo[0])

//agregar un elemento al arreglo asta el final
arreglo.push(12)
console.log(arreglo)

//Para eliminar un elemento que esta al final


//Uso de Iterador Spread para copiar un arreglo
const array2 = [...arreglo]
array2.push(24);
console.log(array2)

//Otra fomra de iterar un arreglo mediante otro con MAP el cual crea un array nuevo
const array3 = array2.map((item)=>{
    //Para usar el map, se usa un callback, mediante funcion 
    //Este arreglo agregara los datos multiplicados por dos
    return item*2
})
console.log(array3)