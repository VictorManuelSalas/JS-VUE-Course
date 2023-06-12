<template>
  <h1>About Page</h1>
</template>

<script>
export default {
  beforeCreate() {
    console.log('______________________________Ciclos de Vida de VUE______________________________')
    console.log("beforeCreate")
  },
  created() {
    console.log("Created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  updated() {
    console.log("update")
  },
  activated() {
    console.log("activated")
  },
  deactivated() {
    console.log("deactivated")
  },
  beforeUnmount() {
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
  },
  errorCaptured() {
    console.log("errorCaptured")
  },
  renderTracked() {
    console.log("renderTracker")
  },
  renderTriggered() {
    console.log("renderTriggered")
  },
};
</script>

<style></style>
