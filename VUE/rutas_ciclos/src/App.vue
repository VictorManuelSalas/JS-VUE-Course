<template>
  <Navbar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--router-view es el componente que muestra el componente que se elije mediante la ruta url que se implementa en router.js-->
  <router-view />
</template>

<script>
import Navbar from "./modules/shared/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
