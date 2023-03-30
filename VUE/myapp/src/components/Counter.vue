<template>
    <div>
        <h2>Counter</h2>
        <p>{{ num }}</p>
        <button @click="aumentar">Ingrementar</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Counter',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        aumentar() {
            this.num = ref(this.num)
            this.num = this.num + 1
        }
    }
}
</script>

<style></style>