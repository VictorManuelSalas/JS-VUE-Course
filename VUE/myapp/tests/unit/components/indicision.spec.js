import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

//wrapper es todo el componente
describe('Indecision Component', () => {
    let wrapper

    //Estan pendientes a cualquier suceso que queremos (metodos,librerias,etc)
    let clgSpy


    //Moc de API ya que fetch no se tiene en node, el fn() es para ell fetch, el Promisie.resolve es para el then
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        //Definimos a que elemento o metodo se estara monitoriando
        clgSpy = jest.spyOn(console, 'log')


        jest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.loog) ', async () => {
        /*VM is the Vue instance. You can access all the instance methods and properties 
        of a vm with wrapper.vm. This only exists on Vue component wrapper or HTMLElement binding Vue component wrapper. */
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })


    test('escribir el simbolo de "?" debe de disparar el fecth', async () => {
        //Spyon se encarga de monitoriar un elemento 
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        //Esperamos que el console.log se aya llamado una vez
        expect(clgSpy).toHaveBeenCalledTimes(1)
        //Se espera que la funcion se alla llamado
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas de getAnswer - Fallo en el API', async () => {
        //SIMULACION DEL FALLO
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')

        expect(img.exist).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
    })


})

//https://v1.test-utils.vuejs.org/api/wrapper/#properties