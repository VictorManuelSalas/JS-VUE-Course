//FETCH API es la forma orignal o determinada de JS para consultar apis


//Se obtiene el apikey del api que van a consultar
const apikey = 'pH0LtKoFJneIHQ2rKhBMNFkq482EVMr8'
//
//Esto es para darle mas detalle a la pagina
const img = document.getElementById('img')

//Funcion para ejecutar la cada ves que se presione un boton
function change() {
    //Funcion fetch el cual entre comillas invertidas se agrega el url de la api y se le agrega el apikey
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
    //Then es para que reciba el dato correctamente y lo pase como formato JSON
        .then(resp => resp.json())
        //Este otro es para destructurar lo para obtener el identificador data
        .then(({ data }) => {
            //Se destructura el valor url del json y se pasa la ubicacion donde esta
            const { url } = data.images.original
            //Relleno
            img.src = url
            console.log(url);
        })
        //Mostrara el error en caso de que aiga uno
        .catch(err => console.log(err))
}
