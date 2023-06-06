<template>
  <div v-if="!pokemon" class="template">
    <h1>Espere un momento...</h1>
    <img src="https://media.baamboozle.com/uploads/images/559823/1637253517_185329_gif-url.gif" alt="">
  </div>

  <div v-else class="template">
    <section v-if="ViewAlert">
      <cardPokemon :pokemonId="pokemon.id" :pokemonName="pokemon.name" @continue="showNew" />
    </section>
    <section v-else>
      <div id="counter">
        <counter :counter="answersCorrects" />
      </div>
      <h2>¿Quien es este Pokemon?</h2>

      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemonsO="pokemonArr" @selectionPokemon="checkAnswer" />

      <template>
        <h1>Aqui es un separador que no se muestra en el html del inspectador de consola...</h1>
      </template>
    </section>


  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import cardPokemon from '@/components/cardPokemon.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
import Counter from '@/components/Counter.vue'
import { ref } from 'vue';
export default {
  components: {
    PokemonOptions, PokemonPicture,
    Counter, cardPokemon
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      answersCorrects: 0,
      ViewAlert: false
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
        this.answersCorrects = ref(this.answersCorrects + 1)
        this.showPokemon = ref(true)
        setTimeout(() => {
          this.ViewAlert = ref(true)
          this.showPokemon = ref(false)
        }, 1000)
      } else {
        setTimeout(() => {
          this.mixPokemonArray()
        }, 1000)
      }
    },
    showNew() {
      this.showPokemon = ref(false)
      setTimeout(() => { 
        this.mixPokemonArray()
        this.ViewAlert = ref(false)
      }, 2000)   
      
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

<style>

#counter {
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
}
</style>