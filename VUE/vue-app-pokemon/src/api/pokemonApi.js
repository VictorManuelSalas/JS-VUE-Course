import axios from "axios";

// Establecer configuraciones por defecto al crear la instancia
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonApi