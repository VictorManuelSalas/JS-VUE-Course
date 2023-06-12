<template>
  <h1>
    Pokemon Page: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  //Prop id recibido desde la ruta url que se desglosa en router.js
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      // id: this.route.params.id,
      pokemon: null,
    };
  },
  created() {
    /*
    //Obtener la informacion de la url
    const { id } = this.$route.params;
    this.id = id;
    console.log(id);
    */
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((data) => data.json());
        this.pokemon = pokemon;
        console.log(pokemon);
      } catch (error) {
        alert("Pokemon no encontrado, redirigiendo a home...");
        //Esto sirve para poder redireccionar a una pagina en concreto
        this.$router.push("/");
      }
    },
  },
  watch: {
    //El watch esta al pendiente de los cambios del id, si este cambia entonces correra la funcion getPokemon
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style scoped>
img {
  width: 10%;
  height: fit-content;
}
</style>
