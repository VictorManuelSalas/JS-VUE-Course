<template>
    <div id="back-ground">
        <div class="indecision-container">
            <input v-model="question" type="text" placeholder="Hazme una pregunta" v-on:keypress(?)="Ask">
            <p>Recuerda terminar con un signo de interrogacion (?)</p>
            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>
           <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: '',
            answer: '',
            img: '',
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswer() {

            try {
                this.answer = 'Pensando...'
                const { answer, image } = await fetch('https://yesno.wtf/api').then(response => response.json())
                //console.log(data)
                this.answer = answer == 'yes' ? 'Si' : 'No';
                this.img = image;
                //document.getElementById('back-ground').style.backgroundImage = `url("${ this.img}")`
            } catch (error) {
                console.log('IndecisionComponent: ', error);
                this.answer = 'No se pudo cargar el API'
                this.img = null
            }
        }

    }
    ,
    watch: {
        //El Watch esta al Pendinete de los cambios de elementos que tienen los atributos value y oldvalue por defecto
        question(value, oldvalued) {
            //Para ocultar la seccion de la respuesta asta que que se agregue el ?
            this.isValidQuestion = false
            //Console para usar lo en los test del componente 
            console.log({ value })
            //Value muestra el valor actual y el oldvalue muestra el valor que esta antes de el actual
            if (!value.includes('?')) return
            //Se muestra la seccion 
            this.isValidQuestion = true
            this.getAnswer()
        }
    }

}
</script>

<style scoped>
#back-ground {
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    margin-top: 2rem;
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