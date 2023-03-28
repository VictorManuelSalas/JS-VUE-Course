const miPromesa = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Reject en mi promesa')
        }, 1000);
    })
}

const AsyncEjemplo = async () => {
    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin')

        return 'Ejecucion correcta'
    } catch (error) {
        return 'Catch en la funcion'
    }
}

AsyncEjemplo()
.then(valor => console.log('Then: Exitoso ->', valor))
.catch(err => console.log('Error: ', err))