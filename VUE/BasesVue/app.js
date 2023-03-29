//console.log(Vue)

//Se crea una app 
const app = Vue.createApp({
    //Template es el relleno
    template: `
    <div>
    <h1>Bases</h1>
    <p>Desde app.js</p>
    <b>{{ 1 + 1 }}</b>
    <b>{{message}}</b>

    <b>Yo soy {{quote}}</b>

    <button v-on:click='changeQuote'>Change</button>
    </div>
    
    <div>
        <h1>Directiva Model</h1>
        <p>Agregar una nueva frase a las listas</p>
        <input 
            type='text' 
            v-model='nuevaFrase'
            v-on:keypress.enter='ingresarFrase'>

            <p>Documentacion de eventos: <a href='https://vuejs.org/guide/essentials/event-handling.html#event-modifiers'>Acceder</a></p>
    </div>
    <div>
        <h1>Directiva for</h1>
        
        <ul>
        <p>-Iteracion normal-</p>
            <li v-for="frase, index in Frases">
            <span> 
            {{ index + 1 }} - {{frase.quote}}
            <blockquote><b v-if="frase.author == 'Victor Manuel Nuñez Salas'">Administrador : </b> "{{frase.author}}"</blockquote>
            </span>
                
            </li>
        </ul> 
        <p v-if="Frases.length <= 0" id='dataNot'>
            <b>¡¡ No hay datos para mostrar !!</b>
            <img src='./assets/page-not-found.png' />
        </p>
        <ul>
        <p>-Iteracion mediante destructuracion de los valores-</p>
             <li v-for="({quote, author}, index) in Frases">
             <span>
             {{ index + 1 }} - {{quote}} 
            <blockquote>"{{author}}"</blockquote>
            </span>
                <p class="delete" v-on:click='eliminarFrase({index, quote})'>Delete</p>
        </li>
    </ul>
    </div>

    `,
    data() {
        return {
            message: 'Hola este es un mensaje de VUE',
            quote: '⚜️',
            num: 0,
            autores: ['Batman', 'Spiderman', 'Ironman', 'CapAmerica', 'Alcon'],
            Frases: [
                { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
                { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
                { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
                { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
                { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
                { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
            ],
            nuevaFrase: ''
        }
    },
    methods: {
        changeQuote() {
            large = this.autores.length
            if (this.num >= large) {
                this.num = 0
            } else {
                this.quote = this.autores[this.num]
                this.num = this.num + 1;
                this.mayuscula();
            }
        },
        mayuscula() {
            this.quote = this.quote.toUpperCase()
        },
        ingresarFrase(){
            console.log(this.nuevaFrase);
            this.Frases.unshift({
                quote: this.nuevaFrase,
                author: 'Victor Manuel Nuñez Salas'
            });
        }, 
        eliminarFrase(data){
            number = data.index
            frase = data.quote
            //El splice elimina un elemento de un array mediante su posicion y cuantos elementos eliminar
            this.Frases.splice(number,1)
        }
    }

})

//Codigo para montar la data de vue la cual es con la variable de arriba
app.mount('#myApp')