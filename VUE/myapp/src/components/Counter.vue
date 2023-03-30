<template>
    <div>
        <h2>Counter</h2>

        <label for="elevacion">Ingresa el numero de elevacion</label>
        <input id="elevacion" type="text" v-model="eleva">
        <p>{{ num }} <sup>{{eleva}}</sup> = {{ num * eleva }}</p>

        <button @click="aumentar">Ingrementar numero base</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Counter',
    data() {
        return {
            num: 0,
            eleva: 0
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