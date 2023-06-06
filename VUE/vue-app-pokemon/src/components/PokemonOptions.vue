<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemonsO" :key="pokemon.id" @click="$emit('selectionPokemon', pokemon.id) ">{{ pokemon.name }}</li>
        </ul>
    </div>
</template>

<script>


export default {
    props: {
        pokemonsO: {
            typeof: Array,
            required: true
        }
    }
}
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 1rem 0;
}

li:hover {
    background-color: rgb(0, 0, 0);
    color: white;
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>