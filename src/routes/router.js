import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "../components/Home.vue";
import Books from "../components/books/Books.vue";
import Book from "../components/books/Book.vue";
import NewBook from "../components/books/NewBook.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/books-listing', component: Books },
    { path: '/book/:id', component: Book, props: true },
    { path: '/add-book', component: NewBook }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
