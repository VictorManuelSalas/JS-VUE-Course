<template>
  <div>
    <header>
      <!--Rutas-->
      <a href="#/Counter">Counter</a> |
      <a href="#/Indecision">Indecision</a> |
      <a href="#/non-existent-path">Link Vacio</a>
      <!--<p>{{ currentPath }}</p>
      <p>{{ currentView }}</p>-->
    </header>

    <section>
      <!--Apartado que se mostrara el componente que se seleccione con la rutas-->
      <component :is="currentView" />
    </section>
    
    <!--
      <img alt="Vue logo" src="./assets/logo.png">
  
    <Counter title="Contador"/>
   -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue';
import Indecision from './components/Indecision.vue';

// Rutas establecidas manualmente 
const routes = {
  '/Counter': Counter,
  '/Indecision': Indecision
}
export default {
  data() {
    return {
      /*`window.location.hash` es una propiedad de JavaScript que devuelve la parte de la URL de la página web que sigue al símbolo `#`. 
      Por ejemplo, si la URL de la página es "https://ejemplo.com/pagina#seccion1", `window.location.hash` devolverá "#seccion1".
      Esta propiedad es comúnmente utilizada en aplicaciones web de una sola página (Single Page Applications) para cambiar el contenido de la página sin recargarla completamente. Al cambiar el valor de `window.location.hash` a través del código JavaScript, se puede actualizar la URL de la página y, por lo tanto, permitir que el usuario vuelva a acceder a ese estado específico en el futuro mediante un marcador o un enlace.
      También es posible leer el valor de `window.location.hash` para determinar la sección de la página en la que se encuentra el usuario y tomar decisiones de acuerdo a ella. Por ejemplo, en una página con varias secciones, se puede resaltar la sección actual basada en el valor de `window.location.hash`. */
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      //Se obtiene el parametro con el nombre del valor que se dio clic en el currentPath, quitandole el # para que mande un /valor y asi se busca en el objeto de routes
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
header {
  width: 100%;
  z-index: 100;
  padding: 2rem 0rem;
  border-bottom: white solid 2px;
}

a {
  text-align: center;
  text-decoration: none;
  font-weight: bolder;
  color: #ffffff;
}
</style>
