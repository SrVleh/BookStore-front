<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Books from './components/books/Books.vue'
import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Signin from "./components/auth/Signin.vue";
import EditBook from "./components/books/EditBook.vue";
import NewBook from "./components/books/NewBook.vue";
import Book from "./components/books/Book.vue";
</script>

<template>
    <Navbar />
    <Books />
    <Footer />
</template>

<style scoped lang="scss">


#app {
    margin: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
