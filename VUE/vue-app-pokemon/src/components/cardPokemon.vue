<template>
    <div>

        <h2>¡¡¡ Correcto, es {{pokemonName}} !!!</h2>
        <img :src="imgSrc" alt="">

        <button @click="$emit('continue') ">Continuar</button>
    </div>
</template>

<script>
export default {
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }, props: {
        pokemonId: {
            typeof: Number,
            default: 0,
            required: true
        }, pokemonName: {
            typeof: String,
            default: '',
            required: true
        }
    }
}
</script>

<style scoped>
div {
    padding: 1rem 1rem;
    border-radius: 2rem;
    background-color: rgb(0, 0, 0);
    display: flex;
    width: fit-content;
    flex-direction: column;
    color: white;
    margin: 2rem auto;
}

button {
    padding: 1rem 2rem;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 2rem;
    cursor: pointer;
    margin: 1rem 0 0 0;
}

img {
    height: 250px;
}
</style>