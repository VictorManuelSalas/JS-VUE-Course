import axios from "axios"


const img = document.getElementById('img')
const apikey = 'pH0LtKoFJneIHQ2rKhBMNFkq482EVMr8'

//https://api.giphy.com/v1/gifs/random?api_key=

const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
})

gifApi.get('/random').then((resp) => { 
    const { data } = resp.data
    const { url } = data.images.original
    img.src = url
})