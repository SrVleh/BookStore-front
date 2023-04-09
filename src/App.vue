<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Books from './components/Books.vue'
import Home from "./components/Home.vue";
</script>

<template>
    <Navbar />
    <Home />
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
