<template>
  <div>
    <h3 v-if="result > 1">{{ result > 0 ? result:'Procesando...'}}</h3>
  </div>
</template>

<script>

export default {
    name:'Result',
    props:{
        result:{
            type: Number,
            default: 0,
            require: true
        }
    }
}
</script>

<style>

</style>