<template>
  <div>
    <h3 v-if="result != null">{{ result > 0 ? result : 'Ingresa un valor ‼️' }}</h3>
  </div>
</template>

<script>

export default {
  name: 'Result',
  props: {
    result: {
      type: Number,
      default: 0,
      require: true

    }
  }
}
</script>

<style></style>