<template>
  <div v-if="!pokemon" class="template">
    <h1>Espere un momento...</h1>
    <img src="https://media.baamboozle.com/uploads/images/559823/1637253517_185329_gif-url.gif" alt="">
  </div>

  <div v-else class="template">
    <section v-if="ViewAlert">
      <cardPokemon :pokemonId="pokemon.id" :pokemonName="pokemon.name" @continue="showNew" />
    </section>
    <section id="game_over" v-else-if="answersErrors == 5">
      <h1>Game Over</h1>
      <img src="../assets/Pokemon-Pokeball-Transparent.png" alt="">
      <p>Te equivocaste 5 veces</p>
      <button @click="newGame">Reintentar</button>
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
      answersErrors: 0,
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
        this.answersErrors = ref(this.answersErrors + 1)
      }
    },
    showNew() {
      this.showPokemon = ref(false)
      setTimeout(() => {
        this.mixPokemonArray()
        this.ViewAlert = ref(false)
      }, 1000)

    },
    newGame() {
      setTimeout(() => {
        this.mixPokemonArray()
        this.answersErrors = 0
        this.answersCorrects = 0
      }, 1000)
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

#game_over {
  padding: 1rem 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  margin: 2rem auto;
  width: fit-content;
}

#game_over button {
  padding: 1rem 2rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 2rem;
  cursor: pointer;
  border: none;
  margin: 1rem 0 0 0;
}

#game_over img {
  height: 200px;
  width: fit-content;
}
</style>