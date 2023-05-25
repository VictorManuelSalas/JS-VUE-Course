<template>
  <div v-if="!pokemon">
    <h1>Espere un momento...</h1>
    <img src="https://media.baamboozle.com/uploads/images/559823/1637253517_185329_gif-url.gif" alt="">
  </div>

  <div v-else>
    <h2>¿Quien es este Pokemon?</h2>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemonsO="pokemonArr" @selectionPokemon="checkAnswer" />


    <template><h1>Aqui es un separador que no se muestra en el html del inspectador de consola...</h1></template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
import { ref } from 'vue';
export default {
  components: {
    PokemonOptions, PokemonPicture
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(data) {
      if (this.pokemon.id == data) {
        console.log(data)
        this.showPokemon = ref(true)
      } else {
        alert('fallaste')
        setTimeout(() => {
          this.mixPokemonArray()
        }, 1000)
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.pokemonArr = []
      this.mixPokemonArray()
    }, 3000)

  }
}
</script>

<style></style>