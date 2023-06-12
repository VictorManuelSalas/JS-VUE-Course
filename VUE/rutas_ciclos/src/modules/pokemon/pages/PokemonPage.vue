<template>
  <h1>
    Pokemon Page: <span>#{{ id }}</span>
  </h1>
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
     // id: "",
    };
  },
  created() {
    /*
    //Obtener la informacion de la url
    const { id } = this.$route.params;
    this.id = id;
    console.log(id);
    */
  },
};
</script>

<style></style>
