<template>
    <div>
        Puntuacion: {{counter}}
    </div>
</template>

<script>
export default {
    props:{
        counter:{
            typeof: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
div {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 1rem 0;
}
</style>