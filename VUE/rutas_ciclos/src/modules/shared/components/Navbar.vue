<template>
  <div>
    <!--Para que el header funcione con las rutas definidas en routes, se deve de usar la 
        etiqueta router-link y en vez de 
    href, se usa el to para definir la direccion a ir
    <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: '401' } }">Pokemon</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>-->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
//para cargar componentes de forma peresoza se ocupa esta importacion
import { defineAsyncComponent } from "vue";

export default {
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink")),
  },
  data() {
    return {
      links: [
        { to: "/home", name: "Pokemons" },
        { to: "/pokemon-id/159", name: "Pokemon" },
        { to: "/about", name: "About" },
        { to: "https://google.com", name: "Google" }
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
  text-align: center;
}
div a {
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
}
/* el a.class se le esta definiendo a los routers-link ya que en el navegador estos se modifican o se
identifican como etiquetas a
a.router-link-active {
  color: green;
} */
</style>
