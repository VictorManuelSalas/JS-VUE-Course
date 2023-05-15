import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

//wrapper es todo el componente
describe('Indecision Component', () => {
    let wrapper

    //Estan pendientes a cualquier suceso que queremos (metodos,librerias,etc)
    let clgSpy
    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        //Definimos a que elemento o metodo se estara monitoriando
        clgSpy = jest.spyOn(console, 'log')

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
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas de getAnswer - Fallo en el API', () => {

    })


})

//https://v1.test-utils.vuejs.org/api/wrapper/#properties