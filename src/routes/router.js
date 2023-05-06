import Home from "../components/Home.vue";
import Books from "../components/books/Books.vue";
import Book from "../components/books/Book.vue";
import NewBook from "../components/books/NewBook.vue";
import EditBook from "../components/books/EditBook.vue"
import Login from "../components/auth/Login.vue";
import Signup from "../components/auth/Signup.vue";
import ProfilePage from "../components/user/ProfilePage.vue";
import EditProfilePic from "../components/user/EditProfilePic.vue";

import Paths from "../constants/Paths.js";
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    { path: Paths.HOME, component: Home},
    { path: Paths.BOOKS_LIST, component: Books, meta: { requiresAuth: true } },
    { path: Paths.SHOW_BOOK, component: Book, props: true, meta: { requiresAuth: true } },
    { path: Paths.NEW_BOOK, component: NewBook, meta: { requiresAuth: true } },
    { path: Paths.EDIT_BOOK, component: EditBook, props: true, meta: { requiresAuth: true }},
    { path: Paths.LOG_IN, component: Login, props: true},
    { path: Paths.SIGN_UP, component: Signup, props: true},
    { path: Paths.PROFILE_PAGE, component: ProfilePage, meta: { requiresAuth: true } },
    { path: Paths.EDIT_PROFILE_PIC, component: EditProfilePic, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
