<template>
  <div>
    <header>
      <a href="#/">Counter</a> |
      <a href="#/Indecision">Indecision</a> |
      <a href="#/non-existent-path">Link Vacio</a>
    </header>

    <section>
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

const routes = {
  '/': Counter,
  '/Indecision': Indecision
}
export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
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
  margin-top: 60px;
}
section{
  margin-top: 2rem;
}
header {
  width: 100%;
  margin: auto;
  z-index: 100;
}

a {
  text-align: center;
  text-decoration: none;
  font-weight: bolder;
  color: #ffffff;
}
</style>
