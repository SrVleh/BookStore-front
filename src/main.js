//Vue
import { createApp } from 'vue'
import App from './App.vue'

//Syles
import './style.scss'

//Router
import router from "./routes/router.js";

createApp(App)
    .use(router)
    .mount('#app')
