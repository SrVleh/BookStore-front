//Vue
import { createApp } from 'vue'
import App from './App.vue'

//Syles
import './style.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Router
import router from "./routes/router.js";

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
