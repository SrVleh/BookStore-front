import Home from "../components/Home.vue";
import Books from "../components/books/Books.vue";
import Book from "../components/books/Book.vue";
import NewBook from "../components/books/NewBook.vue";
import Paths from "../constants/Paths.js";

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: Paths.HOME, component: Home },
    { path: Paths.BOOKS_LIST, component: Books },
    { path: Paths.SHOW_BOOK, component: Book, props: true },
    { path: Paths.NEW_BOOK, component: NewBook }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
