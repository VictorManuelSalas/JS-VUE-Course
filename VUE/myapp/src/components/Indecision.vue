<template>
    <div>
        <img v-if="img" :src="img" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input v-model="question" type="text" placeholder="Hazme una pregunta" v-on:keypress(?)="Ask">
            <p>Recuerda terminar con un signo de interrogacion (?)</p>
            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: '',
            answer:'',
            img: '',
            isValidQuestion: false
        }
    },
    methods:{
        async getAnswer(){
            this.answer = 'Pensando...'
            const { answer, image} = await fetch('https://yesno.wtf/api').then(response => response.json())
            //console.log(data)
            this.answer = answer == 'yes' ? 'Si':'No';
            this.img = image;
        }

    }
    ,
    watch: {
        //El Watch esta al Pendinete de los cambios de elementos que tienen los atributos value y oldvalue por defecto
        question(value, oldvalued) {
            //Para ocultar la seccion de la respuesta asta que que se agregue el ?
            this.isValidQuestion = false
            //Value muestra el valor actual y el oldvalue muestra el valor que esta antes de el actual
            if(!value.includes('?')) return 
            //Se muestra la seccion 
            this.isValidQuestion = true
            this.getAnswer()
        }
    }

}
</script>

<style scoped>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 30px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>