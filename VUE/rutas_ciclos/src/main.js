import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'

//Se ocupa el .use(router) para que funcione las rutas
createApp(App).use(router).mount('#app')
