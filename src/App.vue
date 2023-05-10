
<template>
    <Navbar />
    <router-view></router-view>
    <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import router from "./routes/router.js";
import UserDataController from "./controllers/UserDataController.js";
import RouterController from "./controllers/RouterController.js";

router.beforeResolve((to, from, next) => {
    UserDataController.ReloadData()
    RouterController.Redirect(to, from, next)
})

</script>

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
