<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    class="normal-link"
    >{{ link.name }}</a
  >

<!--El v-slot es como accedemos a la data del router-link el cual el link.to se obtiene como href y isActive es 
un atributo de router para ver si ese enlace esta activo    -->
  <router-link v-else :to="link.to" v-slot="{ href, isActive }">
    <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{
      link.name
    }}</a>
  </router-link>
</template>

<script>

export default {
  props: {
    link: {
      typeof: Object,
      required: true,
    },
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scope>
.is-active {
  text-decoration: none;
  color: rgb(0, 168, 0);
  background-color: rgba(220, 220, 220, 0.667);
  padding: 1rem 1rem;
  border-radius: 1rem;
}
.normal-link {
  text-decoration: none;
  color: rgb(123, 123, 123);
}
</style>
