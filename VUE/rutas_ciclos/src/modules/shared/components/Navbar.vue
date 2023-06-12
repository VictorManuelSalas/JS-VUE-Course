<template>
  <div>
    <!--Para que el header funcione con las rutas definidas en routes, se deve de usar la 
        etiqueta router-link y en vez de 
    href, se usa el to para definir la direccion a ir-->
    <router-link to="/">Pokemon List</router-link>
    <router-link :to="{name: 'pokemon-id', params:{id: '401'}}">Pokemon</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0 30px;
  text-align: center;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}
/* el a.class se le esta definiendo a los routers-link ya que en el navegador estos se modifican o se
identifican como etiquetas a */
a.router-link-active{
    color: green;
}
</style>
