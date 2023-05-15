//------------------------------------Evaluar cambios en el codigo-------------------------------------------------//
//ShallowMount hace montar lijeramente
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";



/*
//Evaluar cambios de codigo 
describe("Counter Component", () => {
  //Snapchot permite montar un componente de Vue de forma aislada para su prueba, sin tener en cuenta los componentes secundarios.
  test("Debe de hacer match con el snapshot", () => {

    //Se monta el componente y se almacena en una variable
    const wrapper = shallowMount(Counter);

    //Se le extrae el html al componente montado en wrapper
    //Con toMatchSnapshot al ejecutarse se creara una carpeta de snapshot y un archivo donde se almacena el html para asi ver las comparaciones
    expect(wrapper.html()).toMatchSnapshot()
  });
});


//Esto arrojara una respuesta, si el codigo permanece igual saldra como Passed, pero si se modifico algo en el html 
//arrojara error y mostrara donde se modifico para asi si no es algo que querramos, vamos y lo removemos.

//Pero si es un cambio necesario, se debe de actualizar la prueba del match para que almacene el nyevo codigo en el snapshot mediante -> npm run test:unit -u  
//Antes de eso deben de agregar en el package.json bajo el -> "test:unit": "vue-cli-service test:unit" el siguiente comando ➡️ "test:unit -u": "vue-cli-service test:unit -u"
*/

describe('Counter Component', () => {

  test('h2 debe de tener el valor por defecto de "Couter" ', () => {
    const wrapper = shallowMount(Counter)

    //Esto busca si una etiqueta existe en el codigo y arrojara true o false
    expect( wrapper.find('h2').exists()).toBeTruthy()

    //Asi se monta una etiqueta ⬇️
    const h2 = wrapper.find('h2')
    //Asi accedemos al valor del texto ⬇️
    console.log(h2.text());
    //Se hace el expect (se espera) que el valor de la etiqueta sea algo en este caso 'Counter'
    expect(h2.text()).toBe('Counter')
  })


  test('El valor por defecto debe de cer 0 en el p ', () => {
     //Wrapper
     const wrapper = shallowMount(Counter)

     //pTags - buscar todos las etiquetas p 
     const pTags = wrapper.findAll('p')

     //Expect que el valor de la etiqueta p sea un 0
     expect(pTags[0].text()).toBe('0')
  })
  
  
})