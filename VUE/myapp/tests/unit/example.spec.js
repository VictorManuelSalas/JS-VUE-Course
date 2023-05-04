
describe('Example Component', () => {
  //Lo que esta en parentesis es una descripcion de la prueba
  test('Debe de ser mayor a 10', () => {
    //Arreglar
    value = 5

    //Estimulo
    value = value + 6

    //Observar el resultado
    expect( value ).toBeGreaterThan(10) //Este atributo hace lo mismo que el if de abajo, se obtubo de JEST -> https://jestjs.io/docs/expect, jest es para pruebas unitarias en varios lenguajes
    
    //Sin expect ⬇️
    /*if (value > 10) {
      console.log('correct');
    } else {
      throw `${value} no es mayor a 10`
    }
    */


    //Para correr las test en nmp es con -> npm run test:unit
  })
})