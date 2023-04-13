import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./components/Home.vue";
import Books from "./components/books/Books.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/books-listing', component: Books}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
