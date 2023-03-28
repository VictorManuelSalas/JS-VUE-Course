const apikey = 'pH0LtKoFJneIHQ2rKhBMNFkq482EVMr8'
const img = document.getElementById('img')
function change() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        .then(resp => resp.json())
        .then(({ data }) => {
            const { url } = data.images.original
            img.src = url
            console.log(url);
        })
        .catch(err => console.log(err))
}
