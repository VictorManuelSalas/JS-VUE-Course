<template>
 <div>
    <img class="hidden-pokemon" :src="imgSrc" alt="pokemon" >
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon" >

 </div>
</template>

<script>
export default {
computed:{
    imgSrc(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
},
props:{
    pokemonId: {
        typeof: Number,
        default: 0,
        required: true 
    },
    showPokemon:{
        typeof: Boolean,
        required: true,
        default: false
    }
}
}


//En los estilos se pone scoped cuando queremos que solo estas reglas de estilos se implementen en esste componente y no global
</script>

<style scoped>
div{
    height: 200px;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
}
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    user-select: none;
    position: absolute;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon{
    filter: brightness(0);
}
</style>