import gifApi from "./12-AXIOS.js";

//console.log(gifApi);
const getImage = async () => {
    try {
        const { data } = (await gifApi.get('/random')).data
        const { url } = data.images.original
        console.log(url);
    } catch (error) {
        console.log('Error en la peticion: ', error);
        throw error
    }
}

getImage()