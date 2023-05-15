//------------------------------------Evaluar cambios en el codigo-------------------------------------------------//
//ShallowMount hace montar lijeramente
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe('Counter Component', () => {
  //Se crea una variable let ya que cambiara. Esto para tener mas simple el codigo y no tener declarado el wrapper y montarlo en cada test 
  let wrapper


  //If you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach hooks
  //Declara para cada test se montara el wrapper
  beforeEach(() => {
    //Se monta el componente y se almacena en la variable
    wrapper = shallowMount(Counter)
  })


  //Snapchot permite montar un componente de Vue de forma aislada para su prueba, sin tener en cuenta los componentes secundarios.
  test("Debe de hacer match con el snapshot", () => {

    //Se le extrae el html al componente montado en wrapper
    //Con toMatchSnapshot al ejecutarse se creara una carpeta de snapshot y un archivo donde se almacena el html para asi ver las comparaciones
    expect(wrapper.html()).toMatchSnapshot()
    //Esto arrojara una respuesta, si el codigo permanece igual saldra como Passed, pero si se modifico algo en el html 
    //arrojara error y mostrara donde se modifico para asi si no es algo que querramos, vamos y lo removemos.

    //Pero si es un cambio necesario, se debe de actualizar la prueba del match para que almacene el nyevo codigo en el snapshot mediante -> npm run test:unit -u  
    //Antes de eso deben de agregar en el package.json bajo el -> "test:unit": "vue-cli-service test:unit" el siguiente comando ➡️ "test:unit -u": "vue-cli-service test:unit -u"

  });

/*
  test('h2 debe de tener el valor por defecto de "Counter" ', () => {


    //Esto busca si una etiqueta existe en el codigo y arrojara true o false
    expect(wrapper.find('h2').exists()).toBeTruthy()

    //Asi se monta una etiqueta ⬇️
    const h2 = wrapper.find('h2')
    //Asi accedemos al valor del texto ⬇️
    console.log(h2.text());
    //Se hace el expect (se espera) que el valor de la etiqueta sea algo en este caso 'Counter'
    expect(h2.text()).toBe('Counter')
  })
*/

  test('El valor por defecto debe de cer 0 en el p ', () => {
    //Wrapper

    //pTags - buscar todos las etiquetas p y esto arrojara una lista 
    const pTags = wrapper.findAll('p')

    //Expect que el valor de la etiqueta p sea un 0, se pone pTags[0] porque como arroja una lista hay que ingresar al valor o ubicacion de la etiqueta que queremos testear
    expect(pTags[0].text()).toBe('0')
  })


  test('El valor por defecto debe de cero 0 en la etiqueta con el identificador: data-testid="counter" ', () => {
    //Wrapper


    //pTags - buscar la etiqueta con ese identificador
    const pTag = wrapper.find('[data-testid="counter"]').text()

    //Expect
    expect(pTag).toBe('0')
  })

  //Funcion ayncrona ya que debe de esperar la respuesta del trigger
  test('Debe de incrementar en 1 el valor de la base', async () => {
    //Wrapper


    //increaseBtn - buscar la etiqueta con ese identificador
    const increaseBtn = wrapper.find('button')

    //Agregar un trigger/activador de tipo click y este debe de ser await
    await increaseBtn.trigger('click')

    //Obtenemos el valor de una etiqueta con identificador
    const value = wrapper.find('[data-testid="counter"]').text()

    //Expect que al dar clic este incremente el valor de la etiqueta con identificador 
    expect(value).toBe('1')
  })


  test('Debe de establecer el valor por defecto PROPS', () => {
    //Destructuracion de props, entre las llaves se pone el identificador de la props a obtener
    const { test_propsts } = wrapper.props()
    //Sin la destructuracion -> const valor = wrapper.props('test_propsts')

    const value = wrapper.find('[data-testid="counter"]').text()

    //Se pasa a tipo number el valor  y se espera que sea igual al valor de la prop test_propsts
    expect(Number(value)).toBe(test_propsts)
  })

  test('Asignar un valor a una etiqueta mediante la prop', () => {

    //Variable con nuevo valor
    const newTitle = 'Hola mundo..........'

    //Montar el componente y su prop y dandole un nuevo valor
    const wrapper = shallowMount(Counter, {
      props: {
        title: newTitle
      }
    })

    console.log(wrapper.html())
    //Se espera que el valor de la etiqueta h2 sea el de title
    expect(wrapper.find('h2').text()).toBe(newTitle)
  })


})

//npm run test:unit counter es para hacer test a un componente en particular y no global 