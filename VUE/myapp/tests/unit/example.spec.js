
describe('Example Component', () => {
  test('Debe de ser mayor a 10', () => {
    //Arreglar
    value = 5

    //Estimulo
    value = value + 6

    //Observar el resultado
    expect( value ).toBeGreaterThan(10)
    /*if (value > 10) {
      console.log('correct');
    } else {
      throw `${value} no es mayor a 10`
    }
    */
  })
})