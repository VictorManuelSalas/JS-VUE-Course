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
        <section>
        <section>
        <input id='checkAll' type='checkbox' v-on:click='selectAll()'>
        <label for='checkAll'> Select All</label>
        </section>
            <button v-on:click='deleteFraseCheck'>Delete</button>
        </section>
        
        <p>-Iteracion normal-</p>
            <li v-for="frase, index in Frases">
            <input type='checkbox'class='check' v-on:click="checar(index)"/>
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
            nuevaFrase: '',
            checkBox: []
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
        ingresarFrase() {
            console.log(this.nuevaFrase);
            this.Frases.unshift({
                quote: this.nuevaFrase,
                author: 'Victor Manuel Nuñez Salas'
            });
        },
        eliminarFrase(data) {
            number = data.index
            frase = data.quote
            //El splice elimina un elemento de un array mediante su posicion y cuantos elementos eliminar
            this.Frases.splice(number, 1)
        },
        selectAll() {
            data = document.getElementById("checkAll").checked
            all = document.getElementsByClassName("check")
            //console.table(all)
            if (data) {
                for (let index = 0; index < all.length; index++) {
                    all[index].checked = true;
                    // console.log(all[index].value);
                }
                for (let index = 0; index < this.Frases.length; index++) {
                    this.checkBox.push(index)
                }
                //this.checkBox.push(data)
            } else {
                for (let index = 0; index < all.length; index++) {
                    all[index].checked = false;
                    //console.log(element);
                }
            }
        },
        checar(data) {
            this.checkBox.push(data)
        },
        deleteFraseCheck() {
            size = this.checkBox.length
            sizeFrases = this.Frases.length
            this.checkBox = this.checkBox.sort()
            console.log(this.checkBox)
            if (size == sizeFrases) {
                this.Frases = []
            } else if (size > 0) {
                //Esto no funciona al 100  porque cuando un elemento se elimina, el array principal se actualiza y 
                //eso actualiza los nuevos index y por eso se eliminan unos que no son y habeses no se encuentre dicho index
                for (let index = 0; index < size; index++) {
                    id = this.checkBox[index]
                    console.log(id)
                    console.log(this.Frases[id]);
                    let dat = this.Frases.splice(id, 1)
                    console.log(dat);
                }
            }
            else {
                alert('No hay nada seleccionado para eliminar')
            }
            all = document.getElementsByClassName("check")
            for (let index = 0; index < all.length; index++) {
                all[index].checked = false;
            }
            this.checkBox = []

        }
    }

})

//Codigo para montar la data de vue la cual es con la variable de arriba
app.mount('#myApp')