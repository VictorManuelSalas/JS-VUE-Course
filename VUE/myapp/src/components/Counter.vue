<template>
    <div id="counter">
        <h2 class="title">{{title}}</h2>
        <p data-testid="counter">{{ num }}</p>
        <label for="elevacion">Ingresa el numero de elevacion </label>
        <input id="elevacion" type="text" v-model="eleva">
        <p>{{ num }} <sup>{{ eleva }}</sup> = {{ num * eleva }}</p>

        <button @click="aumentar">Ingrementar numero base</button>

        <Result :result="num * eleva" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Result from '@/components/Result.vue'
export default {
    name: 'Counter',
    components: {
        Result,
    },
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
    },
    props: {
        test_propsts: {
            typeof: Number,
            default: 0
        },
        title: String,
        default: 'Counter'
    }
}
</script>

<style></style>